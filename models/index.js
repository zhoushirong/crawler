"use strict";
let mongoose = require('mongoose');

// models
require('./mongo/connectDb');
require('./mongo/book');
require('./mongo/bookDiscribe');
require('./mongo/bookDirectory');
require('./mongo/bookChapter');

exports.Book = mongoose.model('Book');
exports.BookDiscribe = mongoose.model('BookDiscribe');
exports.BookDirectory = mongoose.model('BookDirectory');
exports.BookChapter = mongoose.model('BookChapter');
