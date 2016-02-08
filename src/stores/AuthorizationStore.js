/**
 * Created by Muhammad Faizan on 22-Jan-16.
 */
import alt from '../AltApp'
import AuthAction from '../actions/AuthorizationAction'

class AuthorizationStore {
	constructor() {
		this.authorized = true;

		this.bindActions(AuthAction)//TODO bind actions of authorization

	}

	onChangeAuth (val){
		this.authorized = val;
	}
}

export default alt.createStore(AuthorizationStore, 'AuthorizationStore');