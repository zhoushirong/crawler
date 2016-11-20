"use strict";

let mongoConfig = {
	db : 'mysqldb://127.0.0.1/book'
};

if (process.env.NODE_ENV === 'development') {
	mongoConfig.db = 'mysqldb://127.0.0.1/book';
}


module.exports = mongoConfig;