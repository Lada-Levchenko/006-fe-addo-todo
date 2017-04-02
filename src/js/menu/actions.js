import AppDispatcher from './../appDispatcher';

class MenuActions {

  getProjects(projects) {
    AppDispatcher.dispatch({
      eventName: 'get-projects',
      data: projects
    });
  }

  changed(){
    AppDispatcher.dispatch({
      eventName: 'changed'
    });
  }

}

export default new MenuActions();
