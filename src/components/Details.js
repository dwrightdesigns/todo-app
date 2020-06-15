import React from "react";
import SubHeader from "./subheader";
import { Link } from "react-router-dom";

function Details(props) {
  return (
    <>
      <SubHeader subheader="Task Details" />
      <section className="list_box">
        <Link className="button" to={("/editTask/" + props.task.id)}>
          Edit Task
        </Link>
      </section>
    </>
  );
}

export default Details;
