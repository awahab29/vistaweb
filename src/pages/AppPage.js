/**
 * Created by V_D on 1/28/2016.
 */

import React from 'react'
import IconButton from 'material-ui/lib/icon-button';
import NavigationBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';

import {History} from 'react-router';

const AppPage = React.createClass({
  handleTouchTap :function(evt)  {
    this.history.goBack()
  },
  mixins: [ History ],
  render() {
    return (
        <div >
          <AppBar
              title="Alt App with Webpack and Material UI"
              onTouchTap={this.handleTouchTap}
              iconElementLeft={<IconButton><NavigationBack /></IconButton>}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
          {this.props.children}
        </div>
    )
  }
});

module.exports = AppPage;
