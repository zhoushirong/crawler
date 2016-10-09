"use strict";
/**
 * config
 */

let path = require('path');

let config = {
	db : 'mongodb://127.0.0.1/fiction'
};

if (process.env.NODE_ENV === 'development') {
	config.db = 'mongodb://127.0.0.1/fiction';
}

module.exports = config;