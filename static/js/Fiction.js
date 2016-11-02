"use strict";
import React, { Component } from 'react';
import $ from "jquery";
import {Link} from "react-router";

//章节内部导航
export class FictionNav extends React.Component {
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
    document.body.scrollTop=0;
  }
}

export default class Fiction extends React.Component {
  constructor(){
        super();
        this.state = {
            data:{}
        };
    }

    componentWillReceiveProps(nextProps){
      if(this.props.params.id !== nextProps.params.id){
        this.props.params.id = nextProps.params.id;
        this.getFiction()
      }
    }

    componentDidMount(){
       this.getFiction();
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
            <div className="fiction-nav row text-right">
              <FictionNav data={this.state.data}/>
            </div>
          </div>
        )
    }

    //获取正文
    getFiction(){
        let _this = this;
        let id = this.props.params.id;
        let num = this.props.params.num;
        let url = "/service/fiction/"+id+"/"+num;
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