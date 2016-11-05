"use strict";
import React, { Component } from 'react';
import $ from "jquery";
import {Link} from "react-router";

//章节内部导航
export class BookNav extends React.Component {
  constructor(){
    super();
  }
  componentWillMount(){
  }
  componentDidMount(){
  }

  render() {
    let pre = null,
        next= null;
    var _this = this;
    if(this.props.data.pre && this.props.data.pre.id){
      pre = <Link onClick={this.scrollToPageTop} to={`/book/${this.props.data.bookid}/${this.props.data.pre.id}`}>上一章{this.props.data.pre.title}</Link>
    }
    if(this.props.data.next && this.props.data.next.id){
      next = <Link onClick={this.scrollToPageTop} to={`/book/${this.props.data.bookid}/${this.props.data.next.id}`}>下一章{this.props.data.next.title}</Link>
    }
    return (
      <div>
        <Link to={`/`}>首页</Link>
        <Link to={`/book`}>书架</Link>
        <Link to={`/book/${this.props.data.bookid}`}>目录</Link>
        {pre}
        {next}
      </div>
    )
  }

  /*
  * 下一章之后默认定位到首屏
  */
  scrollToPageTop() {
    document.body.scrollTop=0;
  }
}

export default class Book extends React.Component {
  constructor(){
      super();
      this.state = {
          data:{}
      };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id !== nextProps.params.id){
      this.props.params.id = nextProps.params.id;
      this.getBook()
    }
  }

  componentDidMount(){
     this.getBook();
  }

  render() {
      return (
        <div className="container">
          <div className="row">
  	      	<h2>{this.state.data.title}</h2>
  	      	<div className="main">
  	      		<p dangerouslySetInnerHTML={{__html:this.state.data.content}}></p>
  	      	</div>
          </div>
          <div className="book-nav row text-right">
            <BookNav data={this.state.data}/>
          </div>
        </div>
      )
  }

  //获取正文
  getBook(){
      let _this = this;
      let id = this.props.params.id;
      let num = this.props.params.num;
      let url = "/service/book/"+id+"/"+num;
       $.ajax({
          url:url,
          type:'GET',
       }).done(function(result){
          result.data.bookid = id;
          _this.setState({
            data:result.data
          });
       }.bind(_this));
   }
}