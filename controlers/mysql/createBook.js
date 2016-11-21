"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let bookModle = models.Book;

class Book {
	constructor(obj) {
		this.book_name = obj.bookName;
		this.book_author = obj.bookAuthor;
		this.book_source = obj.bookSource;
	}
}

/**
 * 将书本存入数据库
 */
let createBook = (obj) => bookModle.createBook(obj);

/**
 * 更新数据库中的书籍
 */
let updateBook = (obj, newObj) => bookModle.updateBook(obj, newObj);

/**
 * 删除数据库中的书籍
 */
let deleteBook = (obj) => bookModle.deleteBook(obj)

/**
 * 查询数据库中的书籍
 */
let searchBook = (obj, callback) => bookModle.searchBook(obj, callback);


/**
 * 添加 or 更新书籍
 */
module.exports = function(obj) {
	var newBook = new Book(obj);
	searchBook(newBook, function(book) {
		if (book && book.length > 0) {
			updateBook(book[0], newBook);
		} else {
			createBook(newBook);
		}
	})
}