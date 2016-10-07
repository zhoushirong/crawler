"use strict";
let fs = require("fs");
let path = require("path");
let express = require('express');
let router = express.Router();
let directory = null;

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
	if (!directory) {
		directory = require("../data/ergou/directory")
	}
	return res.json({
		"status": 1,
		"data": directory.chapters,
		serverTime: Date.now()
	});
});

router.get("/article/:num", function(req, res, next) {
	let id = req.params.num;
	let article = null;
	let filePath = path.join(__dirname, `../data/ergou/${id}.txt`);

	fs.readFile(filePath, 'utf-8', function(err, data) {
		if (data) {
			article = data;
		}
		res.json({
			"status": 1,
			"data": {
				title: "xx",
				content: article
			},
			serverTime: Date.now()
		});
	});
});
module.exports = function() {
	return router;
};