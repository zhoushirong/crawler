"use strict";
var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.get("/server/**", function(req, res ,next){
	//render();
	console.log("xxx");
	next();
});

router.get(['/','/:id'],function(req, res, next){
	res.render("index", {
		title:"crawler",
		data: {}
	});
});
// router.get('/:id',function(req, res, next){
// 	res.render("content", {
// 		title:"crawler content",
// 		data: {}
// 	});
// });
module.exports = function () {
    return router;
};

