"use strict";
/**
* 获取数据
*/

let models = require("../models");
let bookChapterModle = models.BookChapter;

module.exports = function(id,number, callback) {
	bookChapterModle.findOne({"book_chapter_number": number}, function(err, bookChapter) {
		if (!bookChapter) {
			bookChapter = "{}";
		}
		callback && callback(bookChapter);
	});
};