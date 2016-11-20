"use strict";
/**
* 获取数据
*/

let models = require("../../models");
let grabBookOneChapter = require("./grabBookOneChapter");
let bookChapterModle = models.BookChapter;



module.exports = function(id,number, callback) {
	bookChapterModle.findOne({"book_chapter_number": number}, function(err, bookChapter) {
		if (!bookChapter) {
			bookChapter = "{}";
		} else if(!bookChapter.book_chapter_content) {console.log(2222);
			grabBookOneChapter(id, number);
		}

		callback && callback(bookChapter);
	});
};