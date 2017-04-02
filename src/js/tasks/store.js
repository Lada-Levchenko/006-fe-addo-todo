import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";
import {GET_TASKS, TASKS_CHANGED} from "../helpers/constants";

class TasksStore extends EventEmiter {
  constructor() {
    super();
    this.tasks = [];
    this.header = "";
    this.project_id = null;
  }

  addEventListener(event, callback) {
    this.on(event, callback);
  }

  removeEventListener(event, callback) {
    this.removeListener(event, callback);
  }

  setTasks(list) {
    this.tasks = list;
  }

  getTasks() {
    return this.tasks;
  }

  setHeader(header) {
    this.header = header;
  }

  getHeader() {
    return this.header;
  }

  setProject(project_id) {
    this.project_id = project_id;
  }

  getProject() {
    return this.project_id;
  }

}

let instanseTasksStore = new TasksStore();

instanseTasksStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case GET_TASKS:
      instanseTasksStore.setTasks(action.data);
      instanseTasksStore.emit(action.eventName);
      return false;
    case TASKS_CHANGED:
      instanseTasksStore.setProject(action.data);
      instanseTasksStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseTasksStore;
