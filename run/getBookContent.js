"use strict";
let getBookContent = require("../controlers/getBookContent");
let deleteBook = require("../controlers/deleteBook");

//读取definedBook的时候存入数据库中的书本信息，获取书本内容
deleteBook.deleteBookContent();

getBookContent();
