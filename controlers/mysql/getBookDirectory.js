"use strict";
"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let searchBookById = models.Book.searchBookById;
let searchBookDirectory = models.BookDirectory.searchBookDirectory;
/**
* 获取数据
*/
function searchBookNameById(id, callback) {
	searchBookById(id, function(book) {
		if (!book.length) {
			throw `the book id ${id} is not exist !`;
		}
		let bookName = book[0].book_name;
		callback && callback(bookName);
	});
}

function searchBookDirectoryByBookName (bookName, callback) {
	searchBookDirectory({"book_name" : bookName}, function(bookDirectory) {
		if (!bookDirectory.length) {
			throw `the book ${bookName}'s bookDirectory is not exist !`;
		}
		let directory = bookDirectory[0];
		callback && callback(directory);
	});
	
}
module.exports = function(id, callback) {
	searchBookNameById(id, function(bookName) {
		searchBookDirectoryByBookName(bookName, function(directory) {
			callback && callback(directory);	
		});
	});
};