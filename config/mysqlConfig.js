"use strict";

let mongoConfig = {
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '123456',
	dbname: "crawler";
};

if (process.env.NODE_ENV === 'development') {
	mongoConfig = {
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: '123456',
		dbname: "crawler";
	};
}

module.exports = mongoConfig;