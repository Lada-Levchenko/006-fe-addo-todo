import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";

class TasksStore extends EventEmiter {
  constructor() {
    super();
    this.tasks = [];
    this.header = "";
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

}

let instanseTasksStore = new TasksStore();

instanseTasksStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case 'get-tasks':
      instanseTasksStore.setTasks(action.data);
      instanseTasksStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseTasksStore;
