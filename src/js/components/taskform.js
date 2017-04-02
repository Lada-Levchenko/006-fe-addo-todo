import React from 'react';
import $ from "jquery";
import TasksApi from '../tasks/api';
import MenuStore from '../menu/store';

function swap(elToDeactivate, elToActivate){
  $(elToDeactivate).addClass('hidden');
  $(elToActivate).removeClass('hidden');
}

class Taskform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      name: '',
      date: '',
      project_id: 0,
      priority: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    let list = props.projects.map(project=>{
      return (
        <option value={project.id}>{project.name}</option>
      );
    });
    this.setState({
      projects: list,
      project_id: props.projects[0].id
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let data = {
      "name": this.state.name,
      "date": this.state.date,
      "priority": this.state.priority,
      "project": this.state.project_id
    };
    TasksApi.createTask(data);
    event.preventDefault();
  }

  render() {
    return (
      <span>
        <a href="#" id="perm2" onClick={swap.bind(this, '#perm2', '#temp2')} className="adding-button">+ Add task</a>
        <div id="temp2" className="panel hidden">
          <a href="#" onClick={swap.bind(this, '#temp2', '#perm2')}>- Close</a>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" className="form-control" onChange={this.handleInputChange} placeholder="Task Name" />
              <span className="input-group-btn">
                <input type="date" name="date" className="form-control" onChange={this.handleInputChange} />
              </span>
            </div>
            <div className="input-group pull-right">
              <select className="btn btn-default dropdown-toggle" name="project_id"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              children={this.state.projects} onChange={this.handleInputChange} value={this.state.project_id}/>
              <select className="btn btn-default dropdown-toggle" name="priority"
              onChange={this.handleInputChange} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>
      </span>
    );
  }
}

export default Taskform;
