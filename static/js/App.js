"use strict";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


import ArticleList from './ArticleList';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      	hi i am app.js
      </div>
    )
  }
}