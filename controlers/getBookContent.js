"use strict";
let models = require("../models");
let bookContentModle = models.Book;
let getContent = require("./getContent");

module.exports = function() {
	bookContentModle.findOne({"book_name":"陈二狗的妖孽人生"}, function(err, book) {
		if (book) {
			//获取目录
			getContent(book.book_source, book.book_name);
		}
	});
}