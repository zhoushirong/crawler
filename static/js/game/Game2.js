"use strict";
import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/ball.css'

/*
* 画个球
*/
export class Ball extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {

	}
	copyBgColor(e) {
		let bgColor=e.target.title;
		let cpd = e.clipboardData || window.clipboardData || {};
		cpd.setData && cpd.setData("Text",bgColor); 
		alert("当前颜色值为： "+bgColor);
	}
	render() {
		return <div onClick={this.copyBgColor} className="ball" style={this.props.style} title={this.props.bgColor}>
		</div>
	}
}

/*
* 画很多个球
*/
export class Balls extends React.Component {
	constructor() {
		super();
		this.setState({
			data:null
		});
	}
	componentDidMount() {

	}
	render() {
		let cStr="0123456789abcdef";
		let arr = cStr.split("");
		let l = cStr.length;
		let colors = [];
		let ballNum = 900;
		for(let i=0;i< ballNum;i++) {
			let col = [];
			for(let j=0;j<6;j++) {
				col.push(arr[Math.floor(Math.random() * l)]);
			}
			colors.push("#"+col.join(""));
		}

		
	 	let ball = colors.map(function (color){
	 		let w = Math.floor(10 + Math.random() * 50);
	 		let h = w;
			let half = w/2;
      return (
        <Ball bgColor={color} style={{backgroundColor:color, width:w+"px", height:h+"px", borderRadius:half+"px"}}/>
      );
    });

    return (
        <div className="ballList">
            {ball}
        </div>
    );
	}
}

render((
	<div>
		<Balls />
	</div>
),document.getElementById('game2'));



