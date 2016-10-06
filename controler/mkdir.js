"use strict";
let path = require("path");
let mkdirp = require('mkdirp');

function mkdir(folder) {
	let dir = path.join(__dirname,`../data/${folder}`);
	mkdirp(dir, function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log(`make dir ${dir} ok!`);
		}
	});
}

module.exports = mkdir;