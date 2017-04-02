import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";
import AuthActions from './actions';

class AuthStore extends EventEmiter {
  constructor() {
    super();
    this.username = "None";
  }

  addEventListener(event, callback) {
    this.on(event, callback);
  }

  removeEventListener(event, callback) {
    this.removeListener(event, callback);
  }

  setUsername(name) {
    this.username = name;
  }

  getUsername() {
    return this.username;
  }

}

let instanseAuthStore = new AuthStore();

instanseAuthStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case AuthActions.AUTHORIZED:
      instanseAuthStore.setUsername(action.data);
      instanseAuthStore.emit(action.eventName);
      return false;
    case AuthActions.UNAUTHORIZED:
      instanseAuthStore.setUsername("None");
      instanseAuthStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseAuthStore;
