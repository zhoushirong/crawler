"use strict";
import React, { Component } from 'react';

import ArticleIntro from "./ArticleIntro";
import ArticleList from './ArticleList';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<ArticleIntro />
      	<ArticleList />
      </div>
    )
  }
}