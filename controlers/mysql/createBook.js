"use strict";
let models = require("../models");
let logger = require("../common/logger");
let bookModle = models.Book;


class Book {
	constructor(obj){
		this.book_name = obj.bookName;
		this.book_author = obj.bookAuthor;
		this.book_source = obj.bookSource;
	}
}

/**
* 将书本存入数据库
*/
let createBook = (obj) => {
	let bookEntity = new bookModle(obj);
	bookEntity.save();
}

/**
* 更新数据库中的书籍
*/
let updateBook = (oldObj, obj) => {
	for(let i in obj) {
		oldObj[i] = obj[i];
	}
	oldObj.save();
}

/**
* 创建一本书
*/
module.exports = function (obj) {
	var book = new Book(obj);
	bookModle.findOne({"book_name": book.book_name}, function(err, oldBook){
		if(!oldBook){
			createBook(book);
			logger.info(`create new book ${book.book_name} success!`);
			return false;
		} else {
			updateBook(oldBook, book);
			logger.info(`update book ${book.book_name} success!`);
		}
	});

};
