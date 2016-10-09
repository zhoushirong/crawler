"use strict";
let mkdir = require("../controlers/mkdir");
let getDirectory = require("../controlers/getDirectory");
let getContent = require("../controlers/getContent");
let createBook = require("../controlers/createBook");
let deleteBook = require("../controlers/deleteBook");

class Book{
	constructor(){
	}
	init(obj){
		mkdir("ergou");
		//获取目录
		getDirectory(obj.url, obj.name);
		//获取文章
		getContent(obj.url, obj.name);
	}
}


// 爬陈二狗的妖孽人生
// let ergouBook = new Book();
// ergouBook.init({
// 	"name":"ergou",
// 	"cName":"陈二狗的妖孽人生",
// 	//"url": "http://www.biquku.com/2/2369/"
// 	"url":"http://www.23wx.com/html/8/8590/"
// });

deleteBook.deleteBookMsg();

createBook({
	"bookName":"陈二狗的妖孽人生",
	"bookAuthor":"烽火戏诸侯",
	"bookSource": "http://www.23wx.com/html/8/8590/",
});

// createBook({
// 	"bookName":"雪中悍刀行",
// 	"bookAuthor":"烽火戏诸侯",
// 	"bookSource": "http://www.biquku.com/0/761/",
// });

