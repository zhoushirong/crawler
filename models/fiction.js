"use strict";

let mongoose  = require('mongoose');
let BaseModel = require("./base_model");
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionSchema = new Schema({
	topic_id: { type: ObjectId},
	fiction_name: { type: String },
	fiction_author: { type: String },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
});

FictionSchema.plugin(BaseModel);
FictionSchema.index({topic_id: 1});
FictionSchema.index({create_at: -1});

mongoose.model('Fiction', FictionSchema);
