import AppDispatcher from './../appDispatcher';

class AuthActions {

  authorize(username) {
    AppDispatcher.dispatch({
      eventName: 'authorize',
      data: username
    });
  }

  unauthorize() {
    AppDispatcher.dispatch({
      eventName: 'unauthorize'
    });
  }

}

export default new AuthActions();
