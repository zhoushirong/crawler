"use strict";
let Crawler = require("crawler");
let jsdom = require('jsdom');
let path = require("path");
let writeContent = require("./writeContent");
let fictionList = [];
try{
	fictionList = require("../data/directory.json").chapters;
}catch(e){
	console.error("directory json error!")
}

let ids = [];
fictionList.forEach(function(lis) {
	ids.push(lis.num);
});

console.log(ids);
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
	let content = $('#content').html();
	//将信息写入
	writeContent(content, path.join(__dirname, `../data/${ids[0]}.txt`));
}

/**
 * 循环获取文章
 */
function getArticle(url) {
	ids.forEach(function(lis, index) {
		if (index < 1) {
			getDir.queue(`${url}/${lis}.html`);
		}
	});
};

module.exports = function(url) {
	if(ids.length === 0){
		return false;
	}
	getArticle(url);
	//getDir.queue(`${url}/${ids[0]}.html`);
}