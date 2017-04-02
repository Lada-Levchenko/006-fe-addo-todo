import AppDispatcher from './../appDispatcher';

class TasksActions {

  getTasks(tasks) {
    AppDispatcher.dispatch({
      eventName: 'get-tasks',
      data: tasks
    });
  }

}

export default new TasksActions();
