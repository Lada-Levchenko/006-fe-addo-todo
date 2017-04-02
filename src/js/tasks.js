import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/task';
import Taskform from './components/taskform';
import TasksStore from './tasks/store';
import TasksApi from './tasks/api';
import MenuStore from './menu/store';
import {GET_TASKS, GET_PROJECTS, TASKS_CHANGED} from "./helpers/constants";
import $ from 'jquery';


class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      header: TasksStore.getHeader(),
      tasks: TasksStore.getTasks(),
      projects: MenuStore.getProjects()
    };
    this.onGetTasks = this.onGetTasks.bind(this);
    this.onGetProjects = this.onGetProjects.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  componentDidMount() {
    TasksStore.addEventListener(GET_TASKS, this.onGetTasks);
    TasksStore.addEventListener(TASKS_CHANGED, this.onChanged);
    MenuStore.addEventListener(GET_PROJECTS, this.onGetProjects);
  }

  componentWillUnmount() {
    TasksStore.removeEventListener(GET_TASKS, this.onGetTasks);
    TasksStore.addEventListener(TASKS_CHANGED, this.onChanged);
    MenuStore.removeEventListener(GET_PROJECTS, this.onGetProjects);
  }

  onGetTasks() {
    this.setState({
      header: TasksStore.getHeader(),
      tasks: TasksStore.getTasks()
    });
  }

  onChanged(){
    let project_id = TasksStore.getProject();
    let project = this.state.projects.filter(project => {
      return project.id == project_id;
    })[0];
    console.log(project);
    TasksStore.setHeader(project.name);
    TasksApi.getTasks("project_id=" + project_id);
  }

  onGetProjects() {
    this.setState({
      projects: MenuStore.getProjects()
    });
  }

  renderTask(task){
    return <Task name={task.name} priority={task.priority} project={task.project} />
  }

  render() {
    let elements = "";
    if(this.state.tasks.length > 0){
      let sortedTasks = this.state.tasks.sort(function(a, b) {
        return a.priority - b.priority;
      });
      let list = sortedTasks.map(task=>{
          return this.renderTask.call(this, task);
      });
      elements = <ul className="list-group" children={list} />;

    }
    else{
      elements = (
        <div className="alert alert-info" role="alert">
          Choose one of your projects or date to see the TODO list.
        </div>
      );
    }
    return (
      <span>
        <h4>{this.state.header}</h4>
        {elements}
        <Taskform projects={this.state.projects}/>
      </span>
    );
  }
}

export default Tasks;
