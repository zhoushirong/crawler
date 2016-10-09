"use strict";
/**
* 获取数据
*/

let models = require("../models");
let bookDirectoryModle = models.BookDirectory;

module.exports = function(callback) {
	bookDirectoryModle.findOne({"book_name":"陈二狗的妖孽人生"}, function(err, bookDirectory) {
		if (!bookDirectory) {
			bookDirectory = "{}";
		}
		callback && callback(bookDirectory);
	});
};

