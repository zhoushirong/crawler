"use strict";
import React, { Component } from 'react';
import $ from "jquery";

export default class Fiction extends React.Component {
  constructor(){
        super();
        this.state = {
            data:{}
        };
    }

    componentDidMount(){

    }

    render() {
        return (
          <div className="container">
            大家好我的游戏ID是{this.props.params.id}
          </div>
        )
    }
}