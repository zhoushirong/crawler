"use strict";
/**
* 获取数据
*/

let models = require("../../models");
let bookModle = models.Book;
let bookDirectoryModle = models.BookDirectory;

module.exports = function(id, callback) {
	bookModle.findOne({"_id":id}, function(err, book){
		let bookName = book.book_name;
		bookDirectoryModle.findOne({"book_name":bookName}, function(err, bookDirectory) {
		if (!bookDirectory) {
			bookDirectory = "{}";
		}
		callback && callback(bookDirectory);
	});
	});
	
};

