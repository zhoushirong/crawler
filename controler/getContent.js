"use strict";
let Crawler = require("crawler");
let jsdom = require('jsdom');
let path = require("path");
let writeContent = require("./writeContent");
let fictionList = [];
let bookName = null;
let ids = [];

/**
 * 初始化文章列表
 */
function initArgs() {
	try {
		fictionList = require(path.join(__dirname, `../data/${bookName}/directory.json`)).chapters;
	} catch (e) {
		console.error("directory json error!")
	}

	fictionList.forEach(function(lis) {
		ids.push(lis.num);
	});
	//console.log("xxxxxxxxxx", ids, ids.length,path.join(__dirname,`../data/${bookName}/directory.json`));	
}

/**
 * 循环获取文章
 */
function getArticle(url, id) {
	if (id) {
		getSingleArticle(url, id);
		return false;
	}
	ids.forEach(function(id, index) {
		if (index < ids.length) {
			(function(id) {
				getSingleArticle(url, id);
			})(id);
		}
	});
};

/**
 * 获取单篇文章
 */
function getSingleArticle(url, id) {
	let getDir = new Crawler({
		jQuery: jsdom,
		maxConnections: 200,
		forceUTF8: true,
		// This will be called for each crawled page
		callback: crawlerCallback
	});

	/*
	 * crawler 回调
	 */
	function crawlerCallback(error, result, $) {
		let content = $('#content').html();
		//将信息写入
		writeContent(content, path.join(__dirname, `../data/${bookName}/${id}.txt`));
	}
	getDir.queue(`${url}/${id}.html`);
}

module.exports = function(url, name, id) {
	bookName = name;
	initArgs();
	if (ids.length === 0) {
		return false;
	}
	getArticle(url, id);
}