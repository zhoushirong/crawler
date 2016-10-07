"use strict";
let mkdir = require("./controler/mkdir");
let getDirectory = require("./controler/getDirectory");
let getContent = require("./controler/getContent");

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
let ergouBook = new Book();
ergouBook.init({
	"name":"ergou",
	"cName":"陈二狗的妖孽人生",
	//"url": "http://www.biquku.com/2/2369/"
	"url":"http://www.23wx.com/html/8/8590/"
});




