"use strict";

let mysql = require('mysql');
let config = require('../../config').mysqlConfig;

let connection = mysql.createConnection({
	host: config.host,
	port: config.port,
	user: config.user,
	password: config.password,
	database: config.dbname,
});
let BOOK_TABLE = "bookChapter";

function createBookChapter(obj, callback) {
	let sql = `INSERT INTO ${BOOK_TABLE} VALUES (
		0,
		${connection.escape(obj.book_chapter_number)},
		${connection.escape(obj.book_chapter_name)},
		${connection.escape(obj.book_chapter_content)},
		${connection.escape(JSON.stringify(obj.book_chapter_previous))}, 
		${connection.escape(JSON.stringify(obj.book_chapter_next))}
	)`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback();
		}
	});
}


function updateBookChapter(obj, callback) {
	let sql = `UPDATE ${BOOK_TABLE} SET book_chapter_content = ${connection.escape(obj.book_chapter_content)} WHERE book_chapter_name = ${connection.escape(obj.book_chapter_name)})`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback();
		}
	});
}


function searchBookChapter(obj, callback) {
	let sql = `SELECT * FROM ${BOOK_TABLE} WHERE book_chapter_name = ${connection.escape(obj.book_chapter_name)}`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback(result);
		}
	});
}


exports.createBookChapter = createBookChapter;
exports.searchBookChapter = searchBookChapter;
exports.updateBookChapter = updateBookChapter;