"use strict";

// 书籍章节
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookChapterSchema = new Schema({
	book_id: { type: ObjectId},
	book_chapter_number: {type: String}, // 章节id
	book_chapter_name: { type: String }, // 章节名称
	book_chapter_content: { type: String }, // 章节内容
	book_chapter_previous: { type: Object }, // 上一章节基本信息
	book_chapter_next: { type: Object }, // 下一章节基本信息
});


mongoose.model('BookChapter', BookChapterSchema);
