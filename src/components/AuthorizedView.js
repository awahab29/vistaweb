/**
 * Created by Muhammad Faizan on 25-Jan-16.
 */
import React from 'react';
import AuthorizableComponent from '../utils/AuthorizationMixin'
import AuthorizationStore from '../stores/AuthorizationStore'


class AuthorizedView extends React.Component {

	componentWillMount() {
		console.log(AuthorizationStore.getState())
		if (AuthorizationStore.getState().authorized) {
			//this.props.authorized = 'You are authorized';
		} else {
			//this.props.authorized = 'You are not authorized';
		}
	}

  render() {
    return (
      <div authorized = {AuthorizationStore.getState().authorized? 'Authorized': 'Not Authorized'}>
	      {this.props.authorized}
	      </div>
    );
  }
}

AuthorizedView.propTypes = {};
AuthorizedView.defaultProps = {
	authorized: (AuthorizationStore.getState().authorized)? 'Authorized' : 'Not Authorized'

};

export default AuthorizedView;
