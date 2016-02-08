/**
 * Created by V_D on 1/19/2016.
 */

var alt = require('../AltApp');
var AuthenicationSource = require('../sources/AuthenicationSource');

class UserActions {

  login(data) {

    return (dispatch) => {

      dispatch();

      var actionDispatcher = this;
      actionDispatcher.logging({message:"Please wait...",color:"blue"}); //dispatch the please wait msg

      AuthenicationSource.login(data)
          .then((data) => {

            setTimeout(function(){
              if (data.isSuccess)
                actionDispatcher.afterLogin(data.token);
              else
                actionDispatcher.afterLoginFailure(data.message);
            },1500); //delaying just to check the loader on screen

          });
    }
  }

  afterLogin(token) {
    return token;
  }

  afterLoginFailure(message) {
    return message;
  }

  logging(msg){
    return msg;
  }

}

module.exports = alt.createActions(UserActions);

