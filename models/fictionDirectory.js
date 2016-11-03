"use strict";

// 书籍目录
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionDirectorySchema = new Schema({
	fiction_id: { type: ObjectId},
	fiction_name: { type: String }, // 数名
	fiction_author: { type: String }, // 作者
	fiction_chaper_name: { type: String }, // 章节名
	fiction_chaper_number: { type: String }, // 章节id
});


mongoose.model('FictionDirectory', FictionDirectorySchema);
