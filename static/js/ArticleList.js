"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";

export default class ArticleList extends React.Component {
  render() {
    return (
      <div className="article_list">
      	<ul>
      		<li><Link to="/1012780">第1章 石景山及设计师</Link></li>
      		<li><Link to="/1012781">第2章 石景山及设计师</Link></li>
      		<li><Link to="/1012782">第3章 石景山及设计师</Link></li>
      		<li><Link to="/1012783">第4章 石景山及设计师</Link></li>
      	</ul>
      </div>
    )
  }
}
