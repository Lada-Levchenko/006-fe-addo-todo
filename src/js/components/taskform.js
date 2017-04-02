import React from 'react';
import $ from "jquery";

function swap(elToDeactivate, elToActivate){
  $(elToDeactivate).addClass('hidden');
  $(elToActivate).removeClass('hidden');
}

let Taskform = (props)=> {
  let list = props.projects.map(project=>{
    return (
      <option value={project.id}>{project.name}</option>
    );
  });
  return (
    <span>
      <a href="#" id="perm2" onClick={swap.bind(this, '#perm2', '#temp2')} className="adding-button">+ Add task</a>
      <div id="temp2" className="panel hidden">
        <a href="#" onClick={swap.bind(this, '#temp2', '#perm2')}>- Close</a>
        <form>
          <div className="input-group">
            <input type="text" name="name" className="form-control" placeholder="Task Name" />
            <span className="input-group-btn">
              <input type="date" name="date" className="form-control" />
            </span>
          </div>
          <div className="input-group pull-right">
            <select className="btn btn-default dropdown-toggle" name="project_id"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            children={list} />
            <select className="btn btn-default dropdown-toggle" name="priority" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </span>
  )
}

export default Taskform;
