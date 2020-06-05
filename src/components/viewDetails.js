import React, { Component } from "react";
import SubHeader from "./subheader";
import { Link } from "react-router-dom";

// function getTask() {
//   return (
//     this.props.tasks.find((t) => t.id === this.props.match.params.taskId) || {}
//   );
// }

class Details extends Component {
  render() {
    return (
      <>
        <SubHeader subheader="Task Details" />
        <section className="details_box">
          <div className="details_wrapper">
            <h4>Task: {this.props.title}</h4>
            <h4>Due Date: {this.props.date}</h4>
            <h4>Difficulty: {this.props.option}</h4>
            <h4>Description: {this.props.description}</h4>
          </div>

          {/* Need to pass props here that equal the title, description, option and 
          date of the given task. */}

          <div className="details_wrapper">
            <Link className="button" to="/editTask/">
              Edit Task
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
