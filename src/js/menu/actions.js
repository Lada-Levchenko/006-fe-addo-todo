import AppDispatcher from './../appDispatcher';

class MenuActions {

  getProjects(projects) {
    AppDispatcher.dispatch({
      eventName: 'get-projects',
      data: projects
    });
  }

}

export default new MenuActions();
