"use strict";

let mongoose  = require('mongoose');
let Schema    = mongoose.Schema;
let ObjectId  = Schema.ObjectId;

let FictionChapterSchema = new Schema({
	fiction_chapter_number: {type: String},
	fiction_chapter_name: { type: String },
	fiction_chapter_previous: { type: Object },
	fiction_chapter_next: { type: Object },
});


mongoose.model('FictionChapter', FictionChapterSchema);
