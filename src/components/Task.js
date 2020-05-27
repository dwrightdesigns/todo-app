import React from "react";

function Task(props) {
  return (
    <li className="tasks">
      <label>
        <input className="strikethrough" type="checkbox" defaultChecked={props.task.completed} onChange={() => props.toggle(props.task)}/>
        <span className="label-text">{props.task.title}</span>
      </label>
      <i className="fas fa-trash-alt" onClick={() => props.delete(props.task.title)}></i>
      {/* <i className="fas fa-chevron-right" onClick={props.addTrip}></i> */}
    </li>
  );
}

export default Task;