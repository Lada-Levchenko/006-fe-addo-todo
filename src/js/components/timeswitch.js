import React from 'react';

let Timeswitch = (props)=> {
  return (
    <ul className="nav nav-pills nav-stacked">
      <li role="presentation">
        <a href="#" onClick={()=> { console.log("today"); }}>
          Today
        </a>
      </li>
      <li role="presentation" onClick={()=> { console.log("next 7 days"); }}>
        <a href="#">
          Next 7 days
        </a>
      </li>
    </ul>
  )
}

export default Timeswitch;
