"use strict";
import React, { Component } from 'react';
import $ from "jquery";

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
            <div className="article">
	      	<h2>{this.state.title}</h2>
	      	<div className="main">
	      		<p dangerouslySetInnerHTML={{__html:this.state.data.content}}></p>
	      	</div>
	      </div>
        )
    }

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