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
let BOOK_TABLE = "book";

function createBook(obj, callback) {
	//let sql = `INSERT INTO ${BOOK_TABLE} VALUES (0, ${connection.escape(obj.book_name)}, ${connection.escape(obj.book_author)}, 0, null, ${connection.escape(obj.book_source)})`;
	let sql = `INSERT INTO ${BOOK_TABLE} (
		book_name,
		book_author,
		chapter_num,
		discripe,
		book_source
	) VALUES (
		${connection.escape(obj.book_name)},
		${connection.escape(obj.book_author)},
		0,
		null,
		${connection.escape(obj.book_source)}
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

function updateBook(obj, newObj, callback) {
	var sql = `UPDATE ${BOOK_TABLE} SET book_author=${connection.escape(newObj.book_author)} WHERE book_name=${connection.escape(obj.book_name)}`;
	connection.query(sql, function(err, result) {
		if (err) {
			throw err;
		}
		if (result) {
			callback && callback();
		}
	});
}

function deleteBook(obj) {
	connection.query(`DELETE FROM ${BOOK_TABLE} WHERE book_name=${obj.book_name}`);
}

function searchBook(obj, callback) {
	let sql = `SELECT * FROM ${BOOK_TABLE} WHERE book_name=${connection.escape(obj.book_name)}`;
	connection.query(sql, function(err, row, field) {
		if (err) {
			throw err;
		}
		callback && callback(row);
	});
}

function searchBookById(id, callback) {
	let sql = `SELECT * FROM ${BOOK_TABLE} WHERE id=${connection.escape(id)}`;
	connection.query(sql, function(err, row, field) {
		if (err) {
			throw err;
		}
		callback && callback(row);
	});
}

function searchAllBook(callback) {
	let sql = `SELECT * FROM ${BOOK_TABLE}`;
	connection.query(sql, function(err, row, field) {
		if (err) {
			throw err;
		}
		callback && callback(row);
	})
} 


exports.createBook = createBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.searchBook = searchBook;
exports.searchAllBook = searchAllBook;
exports.searchBookById = searchBookById;



