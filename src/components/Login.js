

/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

var Login = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    this.props.onLogin({'username':e.target[0].value.trim(), 'password': e.target[1].value.trim()});
  },

  render() {

    return (
          <form  className="col s12" onSubmit={this.handleSubmit}>

            <p style={{color:this.props.messageColor}}>
                 {this.props.loginMessage}
            </p>

            <input id="username" name="username"
                type="text"
                placeholder="Username"
                />

            <input id="password" name="password"
                type="password"
                placeholder="Password"
                />

            <RaisedButton label="Login" primary={true} type="submit"/>

          </form>
    );
  }
});

module.exports =  Login;

