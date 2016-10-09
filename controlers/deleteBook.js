"use strict";
let models = require("../models");
let bookModle = models.Book;
let bookDirectoryModle = models.BookDirectory;
let bookContentModle = models.BookContent;

/**
* delete books message
*/
exports.deleteBookMsg = ()=>{
	bookModle.remove({}, function(err) { 
	   console.log('book message is removed') 
	});
}


/**
* delete books directory
*/
exports.deleteBookDirectory = ()=>{
	bookDirectoryModle.remove({}, function(err) { 
	   console.log('bookDirectory is removed') 
	});
}


/**
* delete books content
*/
exports.deleteBookContent = ()=>{
	bookContentModle.remove({}, function(err) { 
	   console.log('bookContent is removed') 
	});
}


/**
* delete all books
*/








