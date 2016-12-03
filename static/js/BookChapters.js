"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";

export default class BookChapters extends React.Component {
  constructor(){
    super();
    this.state = {
      data:{
        bookName:"",
        chapters:[]
      }
    };
  }

  componentDidMount(){
    this.getBookChapters();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id !== nextProps.params.id){
      this.props.params.id = nextProps.params.id;
      this.getBookChapters()
    }
  }

  render() {
  	var _this = this;
    return (
      <div className="container">
        <h1 className="book_name row text-center">{this.state.data.bookName}</h1>
        <BookNav />
        <ul className="list-unstyled row">
        {
            this.state.data.chapters.map(function(item,index){
              return (<li className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.num}><Link to={`/book/${_this.props.params.id}/${item.num}`}>{item.title}</Link></li>);
              })
          }
        </ul>
        <BookNav />
      </div>
    )
  }

  getBookChapters(){
    let _this = this;
    let url = "/service/book/"+_this.props.params.id;
     $.ajax({
        url:url,
        type:'GET',
     }).done(function(result){
      console.log(result);
        _this.setState({
          data:result.data
        });
     }.bind(_this));
   }
}

//章节内部导航
export class BookNav extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="book-nav text-right">
          <Link to={`/`}>首页</Link>
          <Link to={`/book`}>书架</Link>
        </div>
      </div>
    )
  }
}
