"use strict";

let mysql = require('mysql');
let config = require('../../config').mysqlConfig;

let connection = mysql.createConnection({
	host: config.host,
	port: config.port,
	user: config.user,
	password: config.password,
	database: config.dbname,
	charset: "utf8_general_ci"
});
let BOOK_TABLE = "bookDirectory";

function createBookDirectory(obj, callback) {
	let sql = `INSERT INTO ${BOOK_TABLE} VALUES (0, ${connection.escape(obj.book_name)}, ${connection.escape(JSON.stringify(obj.book_chapters))})`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback();
		}
	});
}


function updateBookDirectory(obj, callback) {
	let sql = `UPDATE ${BOOK_TABLE} SET book_chapters = ${connection.escape(JSON.stringify(obj.book_chapters))} WHERE book_name = ${connection.escape(obj.book_name)})`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback();
		}
	});
}


function searchBookDirectory(obj, callback) {
	let sql = `SELECT * FROM ${BOOK_TABLE} WHERE book_name = ${connection.escape(obj.book_name)}`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback(result);
		}
	});
}


exports.createBookDirectory = createBookDirectory;
exports.searchBookDirectory = searchBookDirectory;
exports.updateBookDirectory = updateBookDirectory;
