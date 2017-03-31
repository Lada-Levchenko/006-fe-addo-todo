import React from 'react';
import $ from "jquery";

function swap(elToDeactivate, elToActivate){
  $(elToDeactivate).addClass('deactive');
  $(elToActivate).removeClass('deactive');
}

let Projects = (props)=> {
  let list = props.projects.map(project=>{
    return (
      <li role="presentation">
        <a href="#" onClick={()=> { console.log(project.id); }}>
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
      <div id="temp1" className="panel adding-panel deactive">
        <a href="#" onClick={swap.bind(this, '#temp1', '#perm1')}>- Close</a>
        <form className="bg-gray">
          <input type="text" className="form-control" id="projectName" placeholder="Project Name" />
          <button type="submit" className="btn btn-primary">Submit</button>
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
