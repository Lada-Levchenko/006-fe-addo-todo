import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";
import MenuActions from "./actions";

class MenuStore extends EventEmiter {
  constructor() {
    super();
    this.projects = [];
  }

  addEventListener(event, callback) {
    this.on(event, callback);
  }

  removeEventListener(event, callback) {
    this.removeListener(event, callback);
  }

  setProjects(list) {
    this.projects = list;
  }

  getProjects() {
    return this.projects;
  }

}

let instanseMenuStore = new MenuStore();

instanseMenuStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case MenuActions.GET_PROJECTS:
      instanseMenuStore.setProjects(action.data);
      instanseMenuStore.emit(action.eventName);
      return false;
    case MenuActions.CHANGED:
      instanseMenuStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseMenuStore;
