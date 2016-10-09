"use strict";
let models = require("../models");
let bookDirectoryModle = models.BookDirectory;


class BookDirectory {
	constructor(obj){
		this.book_name = obj.title;
		this.book_author = obj.author;
		this.book_directory = JSON.stringify(obj.chapters);
	}
}

/**
* 创建书本
*/
let createBookDirectory = (bookDirectoryObj) => {
	let bookDirectoryEntity = new bookDirectoryModle(bookDirectoryObj);
	bookDirectoryEntity.save();
}

module.exports = function (obj) {
	var bookDirectory = new BookDirectory(obj);
	bookDirectoryModle.findOne({"book_name": bookDirectory.book_name}, function(err, oldBook){
		if(!oldBook){
			createBookDirectory(bookDirectory);
			console.info("create new bookDirectory ok");
			return false;
		} else {
			console.info("this bookDirectory has exsit !");
		}
	});
};
