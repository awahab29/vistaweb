/**
 * Created by Muhammad Faizan on 25-Jan-16.
 */
import AuthorizationStore from '../stores/AuthorizationStore'
export default function AuthorizationDecorator(target) {
	target.originalRender = target.render;
	target.componentWillMount = function(){
		if (AuthorizationStore.getState().authorized) {
			console.log("Authorized")
			target.render = target.originalRender;
			return ;
		}
		else {
			console.log("Not Authorized")

			target.render = function() {
				return <div>
					You are not authorized.
					</div>
			}
		}
	}
	target.componentWillUnmount = function() {
		// SOME Unloading stuff for later work
	}
}