"use strict";

let getDirectory = require("./controler/getDirectory");
let getContent = require("./controler/getContent");

class Book{
	constructor(){
	}
	init(obj){
		//获取目录
		getDirectory(obj.url);
		//获取文章
		getContent(obj.url);
	}
}


// 爬陈二狗的妖孽人生
let ergouBook = new Book();
ergouBook.init({
	"url": "http://www.biquku.com/2/2369/"
});




