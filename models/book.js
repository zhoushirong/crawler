"use strict";

let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookSchema = new Schema({
	topic_id: { type: ObjectId},
	book_name: { type: String },
	book_author: { type: String },
	book_source: { type: String },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
});


mongoose.model('Book', BookSchema);
