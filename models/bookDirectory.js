"use strict";

let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let BookDirectorySchema = new Schema({
	topic_id: { type: ObjectId},
	book_name: { type: String },
	book_author: { type: String },
	book_directory: { type: String },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
});


mongoose.model('BookDirectory', BookDirectorySchema);
