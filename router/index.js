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
		pageKeywords: "邑抔司,烽火戏诸侯,猫腻,血红,陈二狗的妖孽人生,雪中悍刀行,极品公子,将夜,老子是癞蛤蟆,逍行记,庆余年,择天记",
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

