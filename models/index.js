"use strict";
var mongoose = require('mongoose');
var config = require('../config');
var logger = require('../common/logger')

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
require('./bookDirectory');
require('./bookContent');
//require('./fiction');

exports.Book = mongoose.model('Book');
exports.BookDirectory = mongoose.model('BookDirectory');
exports.BookContent = mongoose.model('BookContent');
//exports.Fiction = mongoose.model('Fiction');
