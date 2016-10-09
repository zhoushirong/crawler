"use strict";
let log4js = require('log4js');
let config = require('../config');
let env = process.env.NODE_ENV || "development";
let logger = log4js.getLogger('crawler');

log4js.configure({
	appenders: [{
		type: 'console'
	}, {
		type: 'file',
		filename: 'logs/crawler.log',
		category: 'crawler'
	}]
});

logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;