"use strict";
import React, { Component } from 'react';
import $ from "jquery";

export default class ArticleIntro extends React.Component {
  
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
            <div className="article_intro">
                <h2>{this.state.data.title}</h2>
                <p>作者：{this.state.data.author}</p>
                <p dangerouslySetInnerHTML={{__html:(this.state.data.latest_chapter+"").replace(".html","")}}></p>
                <p>{this.state.data.update_time}</p>
            </div>
        )
    }

    getArticIntro(){
        let _this = this;
        let url = "/service/intro";
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