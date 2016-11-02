"use strict";
import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component{
	render(){
		return (
			<nav className="">
				<li><Link to="/fiction">小说</Link></li>
				<li><Link to="/game">游戏</Link></li>
			</nav>
		)
	}
}


export default Navigation;
