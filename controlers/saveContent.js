"use strict";
let models = require("../models");
let bookContentModle = models.BookContent;


class BookContent {
	constructor(obj) {
		this.book_content_id = obj.num;
		this.book_content_title = obj.title;
		this.book_content = obj.content;
	}
}

/**
 * 创建书本
 */
let createBookContent = (bookContentObj) => {
	let bookContentEntity = new bookContentModle(bookContentObj);
	bookContentEntity.save();
}

module.exports = function(obj) {
	(function(obj) {

		var bookContent = new BookContent(obj);
		if (!bookContent.book_content_id) {
			return false;
		}
		bookContentModle.findOne({"book_content_id": bookContent.book_content_id}, function(err, oldBookContent) {
			if (!oldBookContent) {
				createBookContent(bookContent);
				console.info("create new bookContent ok");
				return false;
			} else {
				console.info("this bookContent has exsit !");
			}
		});
	})(obj);
};