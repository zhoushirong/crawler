"use strict";

// 书籍描述
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookDiscribeSchema = new Schema({
	book_id: { type: ObjectId},
	book_name: { type: String }, // 名称
	book_author: { type: String }, // 作者
	book_type: { type: String }, // 类型
	book_cover: { type: String }, // 封面图地址
	book_last_chapter: {type: Date }, // 最后的章节
	book_chapters_amount: {type: Number }, // 章节数
	book_bytes: {type: Number }, // 大小（字节数）
	book_create_at: { type: Date, default: Date.now }, // 创建时间
	book_last_update: {type: Date }, // 最后更新时间
});

mongoose.model('BookDiscribe', BookDiscribeSchema);
