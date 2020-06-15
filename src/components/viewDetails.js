import React, { Component } from "react";
import SubHeader from "./subheader";
import { Link, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Details extends Component {
  getTask() {
    return (
      this.props.tasks.find((t) => t.id === this.props.match.params.taskId) ||
      {}
    );
  }
  state = {
    task: this.getTask(),
  };

  componentWillMount(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ task: this.getTask() });
    }
  }
  render() {
    const { task } = this.state;
    return (
      <>
        <SubHeader subheader="Task Details" />
        <section className="details_box">
          <div className="details_wrapper">
            <h4>Task: {task.title}</h4>
            <h4>Due Date: {task.date}</h4>
            <h4>Difficulty: {task.option}</h4>
            <h4>Description: {task.description}</h4>
          </div>

          <div className="details_wrapper">
            <Link className="button" to={"/editTask/" + task.id}>
              Edit Task
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Details);
