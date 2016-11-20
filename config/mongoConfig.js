"use strict";

let mysqlConfig = {
	db: 'mongodb://127.0.0.1/book'
};

if (process.env.NODE_ENV === 'development') {
	mysqlConfig.db = 'mongodb://127.0.0.1/book';
}

module.exports = mysqlConfig;