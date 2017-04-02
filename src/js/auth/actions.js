import AppDispatcher from './../appDispatcher';

const AUTHORIZE = 'authorize';
const UNAUTHORIZE = 'unauthorize';

class AuthActions {

  static get AUTHORIZE() {
    return AUTHORIZE;
  }

  static get UNAUTHORIZE() {
    return UNAUTHORIZE;
  }

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
