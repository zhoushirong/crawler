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
  componentWillMount(){
  }
  componentDidMount(){
  }

  render() {
    let pre = null,
        next= null;
    if(this.props.data.pre && this.props.data.pre.id){
      pre = <Link onClick={this.scrollToPageTop} to={"/"+this.props.data.pre.id}>上一章{this.props.data.pre.title}</Link>
    }
    if(this.props.data.next && this.props.data.next.id){
      next = <Link onClick={this.scrollToPageTop} to={"/"+this.props.data.next.id}>下一章{this.props.data.next.title}</Link>
    }
    return (
      <div>
        <Link to={"/"}>目录</Link>
        {pre}
        {next}
      </div>
    )
  }

  /*
  * 下一章之后默认定位到首屏
  */
  scrollToPageTop() {
    $("body").scrollTo(0);
  }
}

export default class Article extends React.Component {
  constructor(){
        super();
        this.state = {
            data:{}
        };
    }

    componentWillReceiveProps(nextProps){
      if(this.props.params.id !== nextProps.params.id){
        this.props.params.id = nextProps.params.id;
        this.getArticIntro()
      }
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
              <ArticleNav data={this.state.data}/>
            </div>
          </div>
        )
    }

    //获取正文
    getArticIntro(){
        let _this = this;
        let id = this.props.params.id;
        let url = "/service/article/"+id;
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