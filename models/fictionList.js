"use strict";

let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionSchema = new Schema({
	fiction_id: { type: ObjectId},
	fiction_name: { type: String },
	fiction_author: { type: String },
});

mongoose.model('Fiction', FictionSchema);
