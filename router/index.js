"use strict";
let express = require('express');
let router = express.Router();

router.use(function (req, res, next) {
    next();
});

var routeArr=['/','/book','/book/:id','/book/:id/:num','/game'];
router.get(routeArr,function(req, res, next){
	res.render("index", {
		title:"邑抔司",
		pageKeywords: "邑抔司,开心一刻,开心一下,烽火戏诸侯,陈二狗的妖孽人生,雪中悍刀行",
		pageDescription: "邑抔司",
		data: {}
	});
});
router.get('/game/:id',function(req, res, next){
	let id= req.params.id;
	res.render(`game/game${id}`, {
		title:`邑抔司-游戏${id}`,
		data: {}
	});
});
module.exports = function () {
    return router;
};

