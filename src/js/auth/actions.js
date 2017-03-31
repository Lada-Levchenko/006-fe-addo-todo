import AppDispatcher from './../appDispatcher';

class AuthActions {

  authorize(username) {
    AppDispatcher.dispatch({
      eventName: 'authorize',
      data: username
    });
  }

}

export default new AuthActions();
