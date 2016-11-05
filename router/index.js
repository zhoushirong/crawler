"use strict";
let express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    next();
});

var routeArr=['/','/book','/book/:id','/book/:id/:num','/game','/game/:id'];
router.get(routeArr,function(req, res, next){
	res.render("index", {
		title:"欢乐社区",
		data: {}
	});
});

module.exports = function () {
    return router;
};

