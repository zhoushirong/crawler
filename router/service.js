"use strict";
let fs = require("fs");
let path = require("path");
let express = require('express');
let router = express.Router();
let directory = null;

let getDirectoryData = require("../controlers/getDirectoryData");
let getContentData = require("../controlers/getContentData");

// 获取小说列表
router.get("/fiction", function(req, res, next) {
	getDirectoryData(function(directoryData){
		res.json({
			"status": 1,
			"data": [{
				title:"陈二狗的妖孽人生",
				id:"1",
			},{
				title:"雪中悍刀行",
				id:"2",
			}],
			serverTime: Date.now()
		});
	});
});

// 获取小说章节列表
router.get("/fiction/:id", function(req, res, next) {
	getDirectoryData(function(directoryData){
		res.json({
			"status": 1,
			"data": directoryData.book_directory,
			serverTime: Date.now()
		});
	});
});

// 获取小说章节信息
router.get("/fiction/:id/:num", function(req, res, next) {
	let id = req.params.num;
	let content = null,
		title = null;

	getContentData(id,function(contentData) {
		let title = contentData.book_content_title;
		let content = contentData.book_content;
		let pre = contentData.book_content_pre;
		let next = contentData.book_content_next;
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
module.exports = function() {
	return router;
};