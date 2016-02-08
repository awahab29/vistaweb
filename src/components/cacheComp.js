/**
 * Created by VD on 1/21/2016.
 */


var React = require('react');
var AltContainer = require('alt-container');

import Arithmetic from './Arithmetic.js';



var cacheComp = React.createClass({
  componentDidMount() {

  },

  render() {
    return (

        <div>
          <h3>Computations Using Local Cache</h3>
            <Arithmetic a={1} b={3} />
        </div>
    );
  }
});

module.exports = cacheComp;
