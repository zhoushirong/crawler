"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let bookModle = models.Book;
let bookDirectoryModle = models.BookDirectory;

class BookDirectory {
	constructor(obj) {
		this.book_name = obj.bookName;
		this.book_chapters = obj.bookChapters;
	}
}

/**
 * 将书本目录存入数据库
 */
let createBookDirectory = (obj) => bookDirectoryModle.createBookDirectory(obj);

/**
 * 更新数据库中的书籍目录
 */
let updateBookDirectory = (obj, newObj) => bookDirectoryModle.updateBookDirectory(obj, newObj);

/**
 * 删除数据库中的书籍目录
 */
let deleteBookDirectory = (obj) => bookDirectoryModle.deleteBookDirectory(obj)

/**
 * 查询数据库中的书籍目录
 */
let searchBookDirectory = (obj, callback) => bookDirectoryModle.searchBook(obj, callback);

/**
 * 查询数据库中的书籍
 */
let searchBook = (obj, callback) => bookModle.searchBook(obj, callback);


/**
 * 添加 or 更新书籍目录
 */
module.exports = function(obj) {
	bookModle.searchBook(obj, function(row){
		let url = row.book_source;
		
	});
}