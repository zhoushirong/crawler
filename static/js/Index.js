"use strict";
import React from "react";
import {render} from "react-dom";
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import normalize from '../node_modules/normalize.css/normalize.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Article from "./Article";

render((
	<Router history={browserHistory}>
	    <Route path="/" component={App}></Route>
	    <Route path="/:id" component={Article}></Route>
  </Router>
),document.getElementById('book'));



