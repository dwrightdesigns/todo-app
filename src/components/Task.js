import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Task(props) {
  return (
    <>
      <StyledTasks>
        <label>
          <input
            className="strikethrough"
            type="checkbox"
            defaultChecked={props.task.completed}
            onChange={() => props.toggle(props.task)}
          />
          <span className="label-text">{props.task.title} </span>
          <Link className="details" to={"/task/" + props.task.id}>
            View
          </Link>
          <Link className="details" to={"/editTask/" + props.task.id}>
            Edit
          </Link>
        </label>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.delete(props.task.title)}
        ></i>
        {/* <i className="fas fa-chevron-right" onClick={props.addTrip}></i> */}
      </StyledTasks>
    </>
  );
}

const StyledTasks = styled.li`
  list-style-type: none;
  background-color: var(--lightest-color);
  margin-bottom: 0.5rem;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`;

export default Task;
