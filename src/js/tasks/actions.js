import AppDispatcher from './../appDispatcher';
import {GET_TASKS} from "../helpers/constants";

class TasksActions {

  static get GET_TASKS() {
    return GET_TASKS;
  }


  getTasks(tasks) {
    AppDispatcher.dispatch({
      eventName: GET_TASKS,
      data: tasks
    });
  }

}

export default new TasksActions();
