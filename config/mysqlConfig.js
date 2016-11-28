"use strict";

let mongoConfig = {
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '123456',
	dbname: "crawler"
};

if (process.env.NODE_ENV === 'production') {
	mongoConfig = {
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: null,
		dbname: "crawler"
	};
}

module.exports = mongoConfig;