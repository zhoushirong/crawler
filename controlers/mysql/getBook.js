"use strict";
"use strict";
let models = require("../../models");
let logger = require("../../common/logger");
let searchAllBook = models.Book.searchAllBook;
/**
* 获取数据
*/

module.exports = function(callback) {
	searchAllBook(function(bookList) {
		if (!bookList.length) {
			bookList = "{}";
		}
		callback && callback(bookList[0]);
	});
};