"use strict";
let mongoose = require('mongoose');
let config = require('../../config').mongoConfig;
let logger = require('../../common/logger')

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
