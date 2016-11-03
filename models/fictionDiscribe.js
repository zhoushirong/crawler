"use strict";

// 书籍描述
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionDiscribeSchema = new Schema({
	fiction_id: { type: ObjectId},
	fiction_name: { type: String }, // 名称
	fiction_author: { type: String }, // 作者
	fiction_type: { type: String }, // 类型
	fiction_cover: { type: String }, // 封面图地址
	fiction_last_chapter: {type: Date }, // 最后的章节
	fiction_chapters_amount: {type: Number }, // 章节数
	fiction_bytes: {type: Number }, // 大小（字节数）
	fiction_create_at: { type: Date, default: Date.now }, // 创建时间
	fiction_last_update: {type: Date }, // 最后更新时间
});

mongoose.model('FictionDiscribe', FictionDiscribeSchema);
