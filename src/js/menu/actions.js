import AppDispatcher from './../appDispatcher';
import {GET_PROJECTS, PROJECTS_CHANGED} from "../helpers/constants"

class MenuActions {

  getProjects(projects) {
    AppDispatcher.dispatch({
      eventName: GET_PROJECTS,
      data: projects
    });
  }

  changed(){
    AppDispatcher.dispatch({
      eventName: PROJECTS_CHANGED
    });
  }

}

export default new MenuActions();
