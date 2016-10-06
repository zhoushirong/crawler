'use strict';

let webpack = require('webpack');

let config = {
    entry: {
        index:[
            "./static/js/Index.js"
        ]
    },
    module: {
        loaders: [
            {test: /\.js$/,loaders: ['babel-loader'],exclude: /node_modules/},
            {test: /\.css$/, loader:'style-loader!css-loader'},
            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,loader : 'url?prefix=font/&limit=10000'}
        ]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + "/staticPub/js",
        filename: 'bundle.js'
    },
    resolve: {
        //定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
        extensions: ['', '.js', '.jsx']
    },
    plugins: []
};


module.exports = config;

