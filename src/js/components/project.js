import React from 'react';
import MenuApi from '../menu/api';
import $ from "jquery";

let Projects = (props)=> {
  return (
    <li role="presentation">
      <a href="#" onClick={ props.method.bind(this, props.project.name, "project_id=" + props.project.id) }>
          <span className="glyphicon glyphicon-record" aria-hidden="true" style={{color: props.project.color}}></span>
          &nbsp;{props.project.name}&nbsp;
          <span className="badge">{props.project.tasks}</span>
      </a>
    </li>
  )
}

export default Projects;
