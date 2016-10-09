"use strict";
/**
* 获取数据
*/

let models = require("../models");
let bookContentModle = models.BookContent;


module.exports = function(id, callback) {
	bookContentModle.findOne({"book_content_id": id}, function(err, bookContent) {
		if (!bookContent) {
			bookContent = "{}";
		}
		callback && callback(bookContent);
	});
};