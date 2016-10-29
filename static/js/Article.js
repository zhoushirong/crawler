"use strict";
import React, { Component } from 'react';
import $ from "jquery";
import {Link} from "react-router";
import "../css/article.css";

//章节内部导航
export class ArticleNav extends React.Component {
  constructor(){
    super();
  }


  getPre (){
    if(this.props.data.pre && this.props.data.pre.num){
      return <Link to={"/"+this.props.data.pre.num}>{this.props.data.pre.title}</Link>
    }
    return "";
  }
  getNext (){
    if(this.props.data.next && this.props.data.next.num){
      return <Link to={"/"+this.props.data.next.num}>{this.props.data.next.title}</Link>
    }
    return "";
  }

  render() {
    let pre = null,
        next= null;
    if(this.props.data.pre && this.props.data.pre.id){
      pre = <Link to={"/"+this.props.data.pre.id}>上一章{this.props.data.pre.title}</Link>
    }
    if(this.props.data.next && this.props.data.next.id){
      next = <Link to={"/"+this.props.data.next.id}>下一章{this.props.data.next.title}</Link>
    }
    return (
      <div>
        <Link to={"/"}>目录</Link>
        {pre}
        {next}
      </div>
    )
  }
}

export default class Article extends React.Component {
  constructor(){
        super();
        this.state = {
            data:{}
        };
    }

    componentDidMount(){
       this.getArticIntro();
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
            <div className="article-nav row text-right">
              <ArticleNav data = {this.state.data}/>
            </div>
          </div>
        )
    }

    //获取正文
    getArticIntro(){
        let _this = this;
        let url = "/service/article/"+this.props.params.id;
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