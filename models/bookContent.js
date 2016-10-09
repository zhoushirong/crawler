"use strict";

let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookContentSchema = new Schema({
	topic_id: { type: ObjectId},
	book_content_id: {type: String},
	book_content_title: { type: String },
	book_content: { type: String },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
});


mongoose.model('BookContent', BookContentSchema);
