"use strict";
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GameList extends React.Component {
  render() {
    return (
        <div className="container">
        	<nav className="nav">
           <li><Link to="/game/1">我是第一个小游戏</Link> </li>
           <li><Link to="/game/2">我是第二个小游戏</Link> </li>
           <li><Link to="/game/3">我是第三个小游戏</Link> </li>
           <li><Link to="/game/4">我是第四个小游戏</Link> </li>
          </nav>
        </div>
    )
  }
}