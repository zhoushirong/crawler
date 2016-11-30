"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";

export default class BookList extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[]
    };
  }

  componentDidMount(){
    this.getBookList();
  }

  render() {
    return (
      <div className="container">
        <ul className="book-list list-unstyled">
        {
            this.state.data.map(function(item,index){
              return (
                <li>
                  <Link to={"/book/"+item.id}>
                    <span className="vertical-center"><p>{item.title}</p><p>作者：{item.author}</p></span>
                  </Link>
                </li>);
              })
          }
        </ul>
      </div>
    )
  }

  getBookList(){
    let _this = this;
    let url = "/service/book";
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
