"use strict";
let express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    next();
});

var routeArr=['/','/fiction','/fiction/:id','/fiction/:id/:num','/game','/game/:id'];
router.get(routeArr,function(req, res, next){
	res.render("index", {
		title:"iorelax",
		data: {}
	});
});

module.exports = function () {
    return router;
};

