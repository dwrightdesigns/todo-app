import React from "react";

function List(props) {
  return (
    <>
      <div onClick={props.addTrip} className="go_back">
        <i className="fas fa-chevron-left"></i> Back to Tasks{" "}
      </div>
      <li className="lists">
        <label>
          <input
            className="strikethrough"
            type="checkbox"
            name="check"
            defaultChecked={props.completed}
          />
          <span className="label-text">Sample To Do Item</span>
        </label>
        <i className="fas fa-trash-alt"></i>
      </li>
    </>
  );
}

// {props.currentTask}

export default List;
