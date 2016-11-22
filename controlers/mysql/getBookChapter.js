"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let bookModle = models.Book;
let bookChapterModle = models.BookChapter;

class BookChapter {
	constructor(obj) {
		this.book_name = obj.bookName;
		this.book_chapters = obj.bookChapters;
	}
}

/**
 * 将书本目录存入数据库
 */
let createBookChapter = (obj) => bookChapterModle.createBookChapter(obj);

/**
 * 更新数据库中的书籍目录
 */
let updateBookChapter = (obj, newObj) => bookChapterModle.updateBookChapter(obj, newObj);

/**
 * 删除数据库中的书籍目录
 */
let deleteBookChapter = (obj) => bookChapterModle.deleteBookChapter(obj)

/**
 * 查询数据库中的书籍目录
 */
let searchBookChapter = (obj, callback) => bookChapterModle.searchBook(obj, callback);

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