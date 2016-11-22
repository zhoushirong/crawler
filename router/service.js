"use strict";
let fs = require("fs");
let path = require("path");
let express = require('express');
let router = express.Router();
let directory = null;

let getBook = require("../controlers").getBook;
let getBookDirectory = require("../controlers").getBookDirectory;
let getBookChapter = require("../controlers").getBookChapter;

// 获取文章列表
router.get("/book", function(req, res, next) {
	getBook(function(directoryData) {
		directoryData = [directoryData];

		let arr = [];
		directoryData.forEach(function(tag, i) {
			let obj = {};
			obj.id = tag.id;
			obj.title = tag.book_name;
			arr.push(obj);
		});
		res.json({
			"status": 1,
			"data": arr,
			serverTime: Date.now()
		});
	});
});

// 获取文章章节列表
router.get("/book/:id", function(req, res, next) {
	let id = req.params.id;
	getBookDirectory(id, function(directoryData) {
		res.json({
			"status": 1,
			"data": JSON.parse(directoryData.book_chapters),
			serverTime: Date.now()
		});
	});
});

// 获取文章章节信息
router.get("/book/:id/:num", function(req, res, next) {
	let id = req.params.id;
	let num = req.params.num;
	let content = null,
		title = null;
	getBookChapter(id, num, function(contentData) {console.log(id, num , 'haahhahaha');
		let title = contentData.book_chapter_name;
		let content = contentData.book_chapter_content;
		let pre = contentData.book_chapter_previous;
		let next = contentData.book_chapter_next;
		res.json({
			"status": 1,
			"data": {
				title: title,
				content: content,
				pre: pre,
				next: next,
			},
			serverTime: Date.now()
		});
	});
});

// 获取游戏列表
router.get("/game", function(req, res, next) {
	var arr = [{
		id: 1,
		title: "游戏1"
	}, {
		id: 2,
		title: "游戏2"
	}, {
		id: 3,
		title: "游戏3"
	}];
	res.json({
		"status": 1,
		"data": arr,
		serverTime: Date.now()
	});
});



module.exports = function() {
	return router;
};