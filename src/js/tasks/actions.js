import AppDispatcher from './../appDispatcher';
import {GET_TASKS, TASKS_CHANGED} from "../helpers/constants";

class TasksActions {


  getTasks(tasks) {
    AppDispatcher.dispatch({
      eventName: GET_TASKS,
      data: tasks
    });
  }

  changed(project){
    AppDispatcher.dispatch({
      eventName: TASKS_CHANGED,
      data: project
    });
  }

}

export default new TasksActions();
