
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