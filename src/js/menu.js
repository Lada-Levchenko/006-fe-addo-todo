import React from 'react';
import ReactDOM from 'react-dom';
import Timeswitch from './components/timeswitch';
import Projects from './components/projects';
import MenuStore from './menu/store';
import MenuApi from './menu/api';
import TasksApi from './tasks/api';
import TasksStore from "./tasks/store";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: MenuStore.getProjects()
    };
    this.onGetProjects = this.onGetProjects.bind(this);
  }

  onGetProjects() {
    this.setState({
      projects: MenuStore.getProjects()
    });
  }

  componentDidMount() {
    MenuStore.addEventListener('get-projects', this.onGetProjects);
    MenuApi.getProjects();
  }

  componentWillUnmount() {
    MenuStore.removeEventListener('get-projects', this.onGetProjects);
  }

  render() {
    return (
      <div>
        <Timeswitch />
        <br />
        <Projects projects={this.state.projects} method={
          (header, request) => {
            TasksStore.setHeader(header);
            TasksApi.getTasks (request);
          }
        }/>
      </div>
    );
  }
}

export default Menu;
