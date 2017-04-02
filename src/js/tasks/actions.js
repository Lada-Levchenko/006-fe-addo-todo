import AppDispatcher from './../appDispatcher';

  const GET_TASKS = 'get-tasks';

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
