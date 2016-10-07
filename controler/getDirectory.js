"use strict";
let Crawler = require("crawler");
let jsdom = require('jsdom');
let writeDirectory = require("./writeDirectory");
let path = require("path");
let bookName = "";

let getDir = new Crawler({
	jQuery: jsdom,
	maxConnections: 100,
	forceUTF8: true,
	// This will be called for each crawled page
	callback: crawlerCallback
});

/*
 * crawler 回调
 */
function crawlerCallback(error, result, $) {
	let currentBook = {};
	let urls = $('#at td a');
	currentBook.title = $('.bdsub dd h3').text()
	currentBook.author = $('#info p').eq(0).text()
	currentBook.update_time = "",//$('#info p').eq(2).text()
	currentBook.latest_chapter = "",// $('#info p').eq(3).html()
	currentBook.intro = "";//$('#intro').html()
	currentBook.chapters = []; //保存章节信息

	for (let i = 0, len = urls.length; i < len; i++) {
		let url = urls[i]
		let _url = $(url).attr('href') + "";
		let num = _url.replace('.html', ''); //得到章节id，查询内容页的时候使用
		let title = $(url).text();


		currentBook.chapters.push({
			num: num,
			title: title,
			url: _url
		});
	}
	//将信息写入
	writeDirectory(currentBook, path.join(__dirname, `../data/${bookName}/directory.json`));
}

module.exports = function(url, name) {
	bookName = name;
	getDir.queue(url);
}