"use strict";
"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let searchBookById = models.Book.searchBookById;
let searchBookDirectory = models.BookDirectory.searchBookDirectory;
/**
* 获取数据
*/

function searchBookDirectoryByBookId (bookId, callback) {
	searchBookDirectory({"book_id" : bookId}, function(bookDirectory) {
		if (!bookDirectory.length) {
			throw `the book ${bookId}'s bookDirectory is not exist !`;
		}
		let directory = bookDirectory[0];
		callback && callback(directory);
	});
	
}
module.exports = function(id, callback) {
	searchBookDirectoryByBookId(id, function(directory) {
	callback && callback(directory);	
});
};