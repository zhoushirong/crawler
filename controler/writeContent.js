"use strict";
let fs = require('fs')

function writeContent(content, path) {
	fs.writeFile(path, content, function(err) {
		if (err) {
			throw err;
		}
		console.log('content It\'s saved!');
		process.exit();
	});
}

module.exports = writeContent;