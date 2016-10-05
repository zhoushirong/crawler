"use strict";
let fs = require('fs')

function writeDirectory(book, path) {
    let initBookData = {
        title: book.title,
        updataTime: book.updataTime,
        lastChapter: book.lastChapter,
        intro: book.intro,
        chapters: book.chapters,
    };

    let content = JSON.stringify(book, null, 4); // Indented 4 spaces

    fs.writeFile(path, content, function(err) {
        if (err) {
            throw err;
        }
        console.log('drectory It\'s saved!');
        process.exit();
    });
}

module.exports = writeDirectory;