import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";
import {GET_PROJECTS, PROJECTS_CHANGED} from "../helpers/constants";

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
    case GET_PROJECTS:
      instanseMenuStore.setProjects(action.data);
      instanseMenuStore.emit(action.eventName);
      return false;
    case PROJECTS_CHANGED:
      instanseMenuStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseMenuStore;
