"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";

export default class FictionList extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[]
    };
  }

  componentDidMount(){
    this.getFictionList();
  }

    render() {
      return (
        <div className="container">
          <ul className="list-unstyled row">
          {
              this.state.data.map(function(item,index){
                return (
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                    <Link to={"/fiction/"+item.id}>{item.title}</Link>
                  </li>);
                })
            }
          </ul>
        </div>
      )
    }

    getFictionList(){
      let _this = this;
      let url = "/service/fiction";
       $.ajax({
          url:url,
          type:'GET',
       }).done(function(result){
          _this.setState({
            data:result.data
          });
       }.bind(_this));
     }
}
