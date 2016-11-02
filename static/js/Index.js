"use strict";
import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

import App from "./App";
import FictionList from "./FictionList";
import Fiction from "./Fiction";
import FictionChapters from "./FictionChapters";
import GameList from "./GameList";
import Game from "./Game";

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}></Route>
	  <Route path="/fiction" component={FictionList}></Route>
		<Route path="/fiction/:id" component={FictionChapters}></Route>
    <Route path="/fiction/:id/:num" component={Fiction}></Route>
    <Route path="/game" component={GameList}></Route>
    <Route path="/game/:id" component={Game}></Route>
  </Router>
),document.getElementById('main'));



