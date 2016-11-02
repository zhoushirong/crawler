"use strict";
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GameList extends React.Component {
  render() {
    return (
        <div className="container">
        	<nav className="game-list list-unstyled">
           <li><Link to="/game/1">小游戏一</Link> </li>
           <li><Link to="/game/2">小游戏二</Link> </li>
           <li><Link to="/game/3">小游戏三</Link> </li>
          </nav>
        </div>
    )
  }
}