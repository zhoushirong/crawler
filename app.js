"use strict";
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let hbs = require("hbs");
let bodyParser = require("body-parser");
let router = require('./router');
let service = require("./router/service");
let compression = require('compression')

let app = express();

// 设置views目录
app.set('views', path.join(__dirname, 'views'));
// views的目录用html后缀
app.set('view engine', 'html');
// 使用handlebars模板引擎
hbs = hbs.create();
app.engine('html', hbs.__express);

// 网站tab栏图标
app.use(favicon(path.join(__dirname, 'favicon.ico')));
// 启用gzip加速
app.use(compression())
// 解析http请求体
app.use(bodyParser.json());
// 解析form表单提交的数据
app.use(bodyParser.urlencoded({ extended: false }));
// 设置静态文件目录
app.use('/static/', express.static(path.join(__dirname, 'static')));
app.use('/staticPub/', express.static(path.join(__dirname, 'staticPub')));

// 初始化路由
app.use('/', router());
app.use('/service', service());

// 404页面处理
app.use(function (req, res, next) {
  let err = {
    status: 404,
    msg: "page not find",
    url: req.url,
    ip: req.ip,
    userAgent: req.headers["user-agent"]
  };
  res.status(404);
  res.render('other/404', {
    message: "页面找不到了",
    status: "404",
  });
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  let status = err.status || 500;
  //err.stack
  res.status(status);
  res.render('other/error', {
    message: "请求服务失败",
    status: 500
  });
  //cat.addEvent("Error", req.url, status, "status = " + status);
});


module.exports = app;





