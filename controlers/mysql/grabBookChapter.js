"use strict";

let Crawler = require("crawler");
let jsdom = require('jsdom');

let models = require("../../models");
let logger = require("../../common/logger");

let bookModle = models.Book;
let bookDirectoryModle = models.BookDirectory;
let bookChapterModle = models.BookChapter;

let bookName = null;
let ids = [];

/**
 * 初始化文章列表
 */
function initArgs(url) {
	bookDirectoryModle.findOne({
		"book_name": bookName
	}, function(err, bookDirectory) {
		if (!bookDirectory) {
			return false;
		}

		let bookChapters = bookDirectory.book_chapters;
		bookChapters.forEach(function(lis) {
			ids.push(lis.num);
		});

		if (ids.length === 0) {
			return false;
		}
		getArticle(url);
	});
}

/**
 * 过滤字符串
 */
function filter(txt) {
	if (!txt) {
		return "";
	}
	return txt.replace("\'", "").replace("\"", "").replace("<", "&lt;").replace(">", "&gt;");
}

/**
 * 循环获取文章
 */
function getArticle(url) {
	let getDir = new Crawler({
		jQuery: jsdom,
		maxConnections: 300,
		forceUTF8: true
	});

	ids.forEach(function(id, index) {
		if (index < ids.length) {
			(function(id) {
				getSingleArticle(getDir, url, id);
			})(id);
		}
	});
}

/**
 * 获取单篇文章
 */
function getSingleArticle(getDir, url, id) {
	getDir.queue({
		uri: `${url}/${id}.html`,
		callback: function(error, result, $) {
			crawlerCallback(error, result, $, getDir, url, id)
		}
	});
}

/*
 * crawler 回调
 */
function crawlerCallback(error, result, $, getDir, url, id) {
	if (!$ || !result || error) {
		//重试，重试这里没有做次数限制，如果是自动执行爬虫需要限制次数
		getSingleArticle(getDir, url, id);
		logger.error(`id:${id} error and then retry"${error}`);
		return false;
	}
	let title = filter($("#amain h1").html()) || "";
	let content = filter($('#contents').html()) || "";
	let contentNavLink = $("#footlink a");

	let pre = "",
		next = "";
	if (contentNavLink && contentNavLink.eq(0) && contentNavLink.eq(0).attr("href")) {
		pre = contentNavLink.eq(0).attr("href").replace(/.*\//ig, "") || "";
	}
	if (contentNavLink && contentNavLink.eq(1) && contentNavLink.eq(1).attr("href")) {
		next = contentNavLink.eq(2).attr("href").replace(/.*\//ig, "") || "";
	}
	let preId = "",
		nextId = "";

	if (/\.html/.test(pre)) {
		preId = pre.replace(/\.html/ig, "");
	}

	if (/\.html/.test(next)) {
		nextId = next.replace(/\.html/ig, "");
	}

	let preTitle = "";
	let nextTitle = "";
	let data = {
		"num": id,
		"title": title,
		"content": content,
		"pre": {
			id: preId,
			title: preTitle
		},
		"next": {
			id: nextId,
			title: nextTitle
		}

	};
	saveBookChapter(data);
}


/**
 * 创建书本
 */
let createBookChapter = (bookChapterObj) => {
	let bookChapterEntity = new bookChapterModle(bookChapterObj);
	bookChapterEntity.save();
}

/**
 * 更新数据库中的书籍内容
 */
let updateBookChapter = (oldObj, obj) => {
	for (let i in obj) {
		oldObj[i] = obj[i];
	}
	oldObj.save();
}

class BookChapter {
	constructor(obj) {
		this.book_chapter_number = obj.num;
		this.book_chapter_name = obj.title;
		this.book_chapter_content = obj.content;
		this.book_chapter_previous = obj.pre;
		this.book_chapter_next = obj.next;
	}
}

function saveBookChapter(obj) {
	(function(obj) {
		let bookChapter = new BookChapter(obj);
		if (!bookChapter.book_chapter_number) {
			return false;
		}
		bookChapterModle.findOne({
			"book_chapter_number": bookChapter.book_chapter_number
		}, function(err, oldBookChapter) {
			if (!oldBookChapter) {
				createBookChapter(bookChapter);
				logger.info(`create ${bookChapter.book_chapter_number} chapter ok!`);
			} else {
				updateBookChapter(oldBookChapter, bookChapter);
				logger.info(`update ${bookChapter.book_chapter_number} chapter ok!`);
			}
		});
	})(obj);
};

module.exports = function(name) {
	bookName = name;
	bookModle.findOne({
		"book_name": name
	}, function(err, book) {
		if (book) {
			let url = book.book_source;
			initArgs(url);
			logger.info(`start to create the chapters of the book ${name}`);
		} else {
			logger.info(`the book ${name} is not exsit! you can try create it`);
		}
	});

}