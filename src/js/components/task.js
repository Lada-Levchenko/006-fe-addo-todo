import React from 'react';

let Task = (props)=> {
  return (
    <li className="list-group-item">
      <span className="pull-right">
        {props.project.name}&nbsp;
        <span className="glyphicon glyphicon-record" aria-hidden="true" style={{color: props.project.color}}></span>
      </span>
      <span className={"glyphicon glyphicon-exclamation-sign priority" + props.priority} aria-hidden="true"></span>
      &nbsp;{props.name}
    </li>
  )
}

export default Task;
