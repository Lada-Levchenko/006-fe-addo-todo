import React from 'react';
import ReactDOM from 'react-dom';
import Timeswitch from './components/timeswitch';
import Project from './components/project';
import ProjectForm from './components/projectform';
import MenuStore from './menu/store';
import MenuApi from './menu/api';
import MenuActions from './menu/actions';
import TasksApi from './tasks/api';
import TasksStore from "./tasks/store";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: MenuStore.getProjects()
    };
    this.onGetProjects = this.onGetProjects.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  onGetProjects() {
    this.setState({
      projects: MenuStore.getProjects()
    });
  }
  onChanged(){
    MenuApi.getProjects();
  }

  componentDidMount() {
    MenuStore.addEventListener(MenuActions.GET_PROJECTS, this.onGetProjects);
    MenuStore.addEventListener(MenuActions.CHANGED, this.onChanged);
    MenuApi.getProjects();
  }

  componentWillUnmount() {
    MenuStore.removeEventListener(MenuActions.GET_PROJECTS, this.onGetProjects);
  }

  renderProjects(){
    let list = this.state.projects.map(data => {
      return (
        <Project project={data} method={
          (header, request) => {
            TasksStore.setHeader(header);
            TasksApi.getTasks (request);
          }
        } />
      );
    });
    list.push(<ProjectForm />);
    return list;
  }

  render() {
    return (
      <div>
        <Timeswitch />
        <br />
        <div>
          <u><h5>Projects:</h5></u>
          <ul className="nav nav-pills nav-stacked" children={this.renderProjects()} />
        </div>
      </div>
    );
  }
}

export default Menu;
