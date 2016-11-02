"use strict";
import React, { Component } from 'react';

import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<Header />
        <Navigation />
      	<section className="containt">
      		大家好，我是文章内容
      	</section>
        <Footer />
      </div>
    )
  }
}