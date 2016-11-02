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
        <Footer />
      </div>
    )
  }
}