/**
 * controlers的入口
 */

"use strict";
exports.createBook = require('./mongo/createBook');
exports.grabBookDirectory = require('./mongo/grabBookDirectory');
exports.grabBookChapter = require('./mongo/grabBookChapter');
exports.grabBookOneChapter = require('./mongo/grabBookOneChapter');

exports.getBook = require('./mongo/getBook');
exports.getBookChapter = require('./mongo/getBookChapter');
exports.getBookDirectory = require('./mongo/getBookDirectory');


