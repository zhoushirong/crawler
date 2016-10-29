"use strict";
let fs = require("fs");
let path = require("path");
let express = require('express');
let router = express.Router();
let directory = null;

let getDirectoryData = require("../controlers/getDirectoryData");
let getContentData = require("../controlers/getContentData");

router.get("/intro", function(req, res, next) {
	if (!directory) {
		directory = require("../data/ergou/directory")
	}
	return res.json({
		"status": 1,
		"data": {
			title: directory.title,
			author: directory.author,
			update_time: directory.update_time,
			latest_chapter: directory.latest_chapter,
			intro: directory.intro
		},
		serverTime: Date.now()
	});
});

router.get("/list", function(req, res, next) {
	getDirectoryData(function(directoryData){
		res.json({
			"status": 1,
			"data": directoryData.book_directory,
			serverTime: Date.now()
		});
	});
	
});

router.get("/article/:num", function(req, res, next) {
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