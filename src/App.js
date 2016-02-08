
require("./styles/main.css");
require("./styles/materialize.css");
require('es6-promise').polyfill(); //taking polyfill globally

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './Routes';

injectTapEventPlugin();

render( Routes , document.getElementById('ReactApp'))