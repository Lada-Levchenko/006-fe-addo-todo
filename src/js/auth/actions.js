import AppDispatcher from './../appDispatcher';
import {AUTHORIZE, UNAUTHORIZE} from "../helpers/constants"

class AuthActions {

  authorize(username) {
    AppDispatcher.dispatch({
      eventName: AUTHORIZE,
      data: username
    });
  }

  unauthorize() {
    AppDispatcher.dispatch({
      eventName: UNAUTHORIZE
    });
  }

}

export default new AuthActions();
