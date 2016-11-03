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
require('./fictionList');
require('./fictionDiscribe');
require('./fictionDirectory');
require('./fictionChapter');

exports.fictionList = mongoose.model('fictionList');
exports.fictionDiscribe = mongoose.model('fictionDiscribe');
exports.fictionDirectory = mongoose.model('fictionDirectory');
exports.fictionChapter = mongoose.model('fictionChapter');
