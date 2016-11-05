"use strict";
let mongoose = require('mongoose');
let config = require('../config');
let logger = require('../common/logger')

mongoose.connect(config.db, {
	server: {
		poolSize: 20
	}
}, function(err) {
	if (err) {
		logger.error('connect to %s error: ', config.db, err.message);
		process.exit(1);
	}
});

// models
require('./book');
require('./bookDiscribe');
require('./bookDirectory');
require('./bookChapter');

exports.Book = mongoose.model('Book');
exports.BookDiscribe = mongoose.model('BookDiscribe');
exports.BookDirectory = mongoose.model('BookDirectory');
exports.BookChapter = mongoose.model('BookChapter');
