"use strict";
let Crawler = require("crawler");
let jsdom = require('jsdom');
let path = require("path");

"use strict";
let models = require("../models");
let bookDirectoryModle = models.BookDirectory;


//let writeContent = require("./writeContent");
let saveContent = require("./saveContent");
let fictionList = [];
let bookName = null;
let ids = [];

/**
 * 初始化文章列表
 */
function initArgs(url) {
	bookDirectoryModle.findOne({"book_name": bookName}, function(err, bookDirectory){
		if(!bookDirectory){
			return false;
		}

		fictionList = JSON.parse(bookDirectory.book_directory);
		fictionList.forEach(function(lis) {
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
		console.error(`id:${id} error and then retry"${error}`);
		return false;
	}
	let title = filter($("#amain h1").html()) || "";
	let content = filter($('#contents').html()) || "";
	let data = {
		"num": id,
		"title":title,
		"content":content	
	};
	//将信息写入
	//writeContent(data, path.join(__dirname, `../data/${bookName}/${id}.txt`));
	saveContent(data);
}


module.exports = function(url, name) {
	bookName = name;
	initArgs(url);
}