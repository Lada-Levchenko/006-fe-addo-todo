import React from 'react';

function getCurrDate(){
  let now = new Date();
  return now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2);
}

function getDateIn(days){
  let now = new Date();
  let date = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000));
  let formatted = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  return formatted;
}

let Timeswitch = (props)=> {
  return (
    <ul className="nav nav-pills nav-stacked">
      <li role="presentation">
        <a href="#" onClick={ props.method.bind(this, "Today", "/dates?start_date=" + getCurrDate() + "&end_date=" + getCurrDate()) }>
          Today
        </a>
      </li>
      <li role="presentation" onClick={ props.method.bind(this, "Next 7 days", "/dates?start_date=" + getCurrDate() + "&end_date=" + getDateIn(7)) }>
        <a href="#">
          Next 7 days
        </a>
      </li>
    </ul>
  )
}

export default Timeswitch;
