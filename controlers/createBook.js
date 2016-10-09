"use strict";
let models = require("../models");
let bookModle = models.Book;


class Book {
	constructor(obj){
		this.book_name = obj.bookName;
		this.book_author = obj.bookAuthor;
		this.book_source = obj.bookSource;
	}
}

/**
* 创建书本
*/
let createBook = (bookObj) => {
	let bookEntity = new bookModle(bookObj);
	bookEntity.save();
}

module.exports = function (obj) {
	var book = new Book(obj);
	bookModle.findOne({"book_name": book.book_name}, function(err, oldBook){
		if(!oldBook){
			createBook(book);
			console.info("create new book ok");
			return false;
		}

		oldBook.book_name = book.book_name+"5";
		oldBook.save(() => {console.log("update old book ok!");});
	});

	console.log("save success!");
};
