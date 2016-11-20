let http = require('http');
let mysql = require('mysql');

let TEST_DATABASE = 'test';
let TEST_TABLE = 'test_table';

let connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
});

//创建数据库
connection.query(`CREATE DATABASE IF NOT EXISTS ${TEST_DATABASE}`, function(err) {
  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
    throw err;
  }
  console.log(`create database ${TEST_DATABASE} is success!`);
});

//不指定回调函数，如果出错，则体现为客户端错误
connection.query(`USE ${TEST_DATABASE}`);

//创建表格,插入数据
connection.query(`CREATE TABLE IF NOT EXISTS ${TEST_TABLE} (
  id INT(11) AUTO_INCREMENT, 
  name VARCHAR(100), 
  PRIMARY KEY (id)
)`);

connection.query(`INSERT INTO ${TEST_TABLE} VALUES (0, 'nodejs8')`);

connection.query(`INSERT INTO ${TEST_TABLE} VALUES (0, 'nodejs9')`);

//查询，并设置回调函数
connection.query(`SELECT * FROM ${TEST_TABLE}`, function(err, results, fields) {
  if (err) {
    throw err;
  }
  console.log(results);
  connection.end();
});


// http.createServer(function(request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   response.end('<b>Hello World</b>');
// }).listen(3096);

// console.log('Server running at http://127.0.0.1:3096/');