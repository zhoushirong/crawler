"use strict";

// 小说章节
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionChapterSchema = new Schema({
	fiction_id: { type: ObjectId},
	fiction_chapter_number: {type: String}, // 章节id
	fiction_chapter_name: { type: String }, // 章节名称
	fiction_chapter_content: { type: String }, // 章节内容
	fiction_chapter_previous: { type: Object }, // 上一章节基本信息
	fiction_chapter_next: { type: Object }, // 下一章节基本信息
});


mongoose.model('FictionChapter', FictionChapterSchema);
