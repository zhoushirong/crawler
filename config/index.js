"use strict";
/**
 * config
 */

let path = require('path');

let config = {
	db : 'mongodb://127.0.0.1/book'
};

if (process.env.NODE_ENV === 'development') {
	config.db = 'mongodb://127.0.0.1/book';
}

module.exports = config;