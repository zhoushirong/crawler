"use strict";
let express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.get(['/','/:id'],function(req, res, next){
	res.render("index", {
		title:"crawler",
		data: {}
	});
});

module.exports = function () {
    return router;
};

