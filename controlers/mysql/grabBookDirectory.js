"use strict";
let Crawler = require("crawler");
let jsdom = require('jsdom');
let path = require("path");

let logger = require('../../common/logger')
let models = require("../../models");
let bookModle = models.Book;
let bookDirectoryModle = models.BookDirectory;

let bookName = "";

class BookDirectory {
	constructor(obj) {
		this.book_name = obj.bookName || "";
		this.book_chapters = obj.chapters || "";
	}
}

/*
 * 抓取回调
 */
function crawlerCallback(error, result, $) {
	let currentBook = {};
	currentBook.bookName = bookName;
	let urls = $('#at td a');
	currentBook.chapters = []; //保存章节信息

	for (let i = 0, len = urls.length; i < len; i++) {
		let url = urls[i]
		let _url = $(url).attr('href') + "";
		let num = _url.replace('.html', ''); //得到章节id，查询内容页的时候使用
		let title = $(url).text();
		currentBook.chapters.push({
			num: num,
			title: title,
		});
	}
	saveDirectory(currentBook);
}

/**
 * 保存书本的目录到数据库
 */
function saveDirectory(obj) {
	let bookDirectory = new BookDirectory(obj);
	bookDirectoryModle.searchBookDirectory({
		"book_name": bookDirectory.book_name
	}, function(oldBookDirectory) {
		if (!oldBookDirectory.length) {
			bookDirectoryModle.createBookDirectory(bookDirectory, function() {
				logger.info(`create ${bookDirectory.book_name} directory ok!`);	
			});
		} else {
			bookDirectoryModle.updateBookDirectory(bookDirectory, function() {
				logger.info(`update ${bookDirectory.book_name} directory ok!`);	
			});
		}
	});
};

/*
 * 根据书名和源去抓取书本的目录
 */
module.exports = function(name) {
	bookName = name;
	bookModle.searchBook({
		"book_name": name
	}, function(book) {
		if (book.length) {
			let url = book[0].book_source;
			let getDir = new Crawler({
				jQuery: jsdom,
				maxConnections: 100,
				forceUTF8: true,
				callback: crawlerCallback
			});
			getDir.queue(url);
			logger.info(`start to create the directory of the book ${name}`);
		} else {
			logger.info(`the book ${name} is not exsit! you can try create it`);
		}
	});
}