"use strict";
import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component{
	render(){
		return (
			<nav className="c_nav list-unstyled">
				<li><Link to="/book">小说</Link></li>
				<li><Link to="/game">游戏</Link></li>
			</nav>
		)
	}
}


export default Navigation;
