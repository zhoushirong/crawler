"use strict";
let models = require("../models");
let bookModle = models.Book;
let getDirectory = require("./getDirectory");

module.exports = function() {
	bookModle.findOne({"book_name":"陈二狗的妖孽人生"}, function(err, book) {
		if (book) {
			//获取目录
			getDirectory(book.book_source, book.book_name);
		}
	});
}