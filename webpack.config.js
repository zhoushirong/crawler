'use strict';

let webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, './static/node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');

let config = {
    entry: {
        index: ["./static/js/Index.js"],
        game1: "./static/js/game/game1.js"
    },
    output: {
        path: path.resolve(__dirname, "./staticPub/js"),
        filename: "[name].entry.js"
    },

    module: {
        noParse: [pathToReact],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url?prefix=font/&limit=10000'
        }]
    },
    devtool: 'source-map',
    //devtool: false,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],

    resolve: {
        //定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
        extensions: ['', '.js', '.jsx', 'es6', "css", "scss", "png", "jpg", "jpeg"],
        alias: {
            react: pathToReact,
            "react-dom": pathToReactDom,
            redux: pathToRedux,
        }
    }
};


module.exports = config;