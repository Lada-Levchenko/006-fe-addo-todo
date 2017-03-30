import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";

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
    case 'get-projects':
      instanseMenuStore.setProjects(action.data);
      instanseMenuStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseMenuStore;
