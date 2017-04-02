import AppDispatcher from './../appDispatcher';

const GET_PROJECTS = 'get-projects';
const CHANGED = 'changed';

class MenuActions {

  static get GET_PROJECTS() {
    return GET_PROJECTS;
  }

  static get CHANGED() {
    return CHANGED;
  }

  getProjects(projects) {
    AppDispatcher.dispatch({
      eventName: GET_PROJECTS,
      data: projects
    });
  }

  changed(){
    AppDispatcher.dispatch({
      eventName: CHANGED
    });
  }

}

export default new MenuActions();
