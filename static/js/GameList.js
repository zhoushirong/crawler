"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";


export default class GameList extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    this.getGameList();
  }

  getGameList(){
    let _this = this;
    let url = "/service/game";
     $.ajax({
        url:url,
        type:'GET',
     }).done(function(result){
        _this.setState({
          data:result.data
        });
     }.bind(_this));
   }

  render() {
    return (
        <div className="container">
        	<nav className="game-list list-unstyled">
           {
            this.state.data.map(function(item,index){
              return (
                <li>
                  <Link to={"/game/"+item.id}>{item.title}</Link>
                </li>);
              })
           }
          </nav>
        </div>
    )
  }
}
