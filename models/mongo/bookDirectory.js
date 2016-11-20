"use strict";

// 书籍目录
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookDirectorySchema = new Schema({
	book_id: { type: ObjectId},
	book_name: { type: String }, // 书名
	book_chapters: { type: Object }, // 章节
});


mongoose.model('BookDirectory', BookDirectorySchema);
