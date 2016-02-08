/*
var React = require('react');
import {render} from 'react-dom';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
//import { Router, Route, Link, IndexRoute  } from 'react-router';

console.log(Router);
console.log(Route);
console.log(IndexRoute);

render(
  <div>
    <h1>this is a page</h1>
    <Router>
      <Route path="/" component={Home} >
        <IndexRoute component={Home} />
        <Route path="location" component={Location}/>
      </Route>
    </Router>
  </div>,
  document.getElementById('ReactApp')
);
*/
require("./styles/main.css");
require("./styles/materialize.css");

//require('babel-polyfill');
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './Routes';

injectTapEventPlugin();


 // <!--<Route path="mapping" component={Mapping}/>-->
render( Routes , document.getElementById('ReactApp'))