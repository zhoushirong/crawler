"use strict";
/**
* 获取数据
*/

let models = require("../../models");
let grabBookOneChapter = require("./grabBookOneChapter");
let bookChapterModle = models.BookChapter;

module.exports = function(id, number, callback) {
	bookChapterModle.searchBookChapter({
		book_id:id,
		book_chapter_number: number
	}, function(row) {
		let bookChapter = "{}";
		if (!row.length || !row[0].book_chapter_content) {
			grabBookOneChapter(id, number);
		} else {
			bookChapter = row[0];
		}
		callback && callback(bookChapter);
	});
};