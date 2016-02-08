/**
 * Created by V_D on 2/3/2016.
 */

import React from 'react';
var NoLink = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  render: function() {
    var message = this.state.message;
    return (
        <div>
          <input type="text" value={message} onChange={this.handleChange} />
          <p>{message}</p>
        </div>
    );
  }
});

module.exports = NoLink;