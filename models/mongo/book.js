"use strict";

// 书籍列表
let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookSchema = new Schema({
	book_id: { type: ObjectId},
	book_name: { type: String },
	book_author: { type: String },
	book_source: {type: String},
});

mongoose.model('Book', BookSchema);
