import React from 'react';
import MenuApi from '../menu/api';
import $ from "jquery";

function swap(elToDeactivate, elToActivate){
  $(elToDeactivate).addClass('hidden');
  $(elToActivate).removeClass('hidden');
}

function request(){
  let form = document.getElementById("create-project");
  let data = {
    "name": form.name.value,
    "color": form.color.value
  };
  MenuApi.createProject(data);
  form.reset();
}

let Projects = (props)=> {
  let list = props.projects.map(project=>{
    return (
      <li role="presentation">
        <a href="#" onClick={ props.method.bind(this, project.name, "project_id=" + project.id) }>
            <span className="glyphicon glyphicon-record" aria-hidden="true" style={{color: project.color}}></span>
            &nbsp;{project.name}&nbsp;
            <span className="badge">{project.tasks}</span>
        </a>
      </li>
    );
  });
  list.push (
    <li role="presentation">
      <a href="#" id="perm1" onClick={swap.bind(this, '#perm1', '#temp1')} className="adding-button">+ Add project</a>
      <div id="temp1" className="panel adding-panel hidden bg-gray">
        <form id="create-project" className="bg-gray">
          <div className="input-group">
            <input type="text" name="name" className="form-control" placeholder="Project Name" />
            <span className="input-group-btn">
              <input type="color" name="color" defaultValue="#ff0000" />
            </span>
          </div>
          <div className="input-group">
            <input onClick={request} type="button" className="btn btn-primary" value="Submit" />
            <a href="#" onClick={swap.bind(this, '#temp1', '#perm1')} className="btn btn-link text-muted">Close</a>
          </div>
        </form>
      </div>
    </li>
  );
  return (
    <div>
      <u><h5>Projects:</h5></u>
      <ul className="nav nav-pills nav-stacked" children={list} />
    </div>
  )
}

export default Projects;
