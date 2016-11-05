"use strict";
/**
* 获取数据
*/

let models = require("../models");
let bookModle = models.Book;

module.exports = function(callback) {console.log(1);
	bookModle.find("*", function(err, bookList) {console.log(2,bookList);
		if (!bookList) {
			bookList = "{}";
		}
		callback && callback(bookList);
	});
};