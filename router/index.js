"use strict";
let express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    next();
});

var routeArr=['/','/book','/book/:id','/book/:id/:num','/game'];
router.get(routeArr,function(req, res, next){
	res.render("index", {
		title:"欢乐社区",
		data: {}
	});
});
router.get('/game/:id',function(req, res, next){
	let id= req.params.id;
	res.render(`game/game${id}`, {
		title:`欢乐社区-游戏${id}`,
		data: {}
	});
});
module.exports = function () {
    return router;
};

