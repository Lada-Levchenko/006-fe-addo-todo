import AppDispatcher from './../appDispatcher';

const AUTHORIZE = 'authorized';
const UNAUTHORIZE = 'unauthorized';

class AuthActions {

  static get AUTHORIZED() {
    return AUTHORIZE;
  }

  static get UNAUTHORIZED() {
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
