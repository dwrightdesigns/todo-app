import React, { Component } from "react";
import SubHeader from "./subheader";
import { withRouter, Link } from "react-router-dom";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  getTask = () => {
    return (
      this.props.tasks.find((t) => t.id === this.props.match.params.taskId) ||
      {}
    );
  };

  state = {
    task: this.getTask(),
    date: "",
    option: "",
    chooseOption: ["Effortless", "Little Effort", "Effort"],
    description: "",
  };

  handleChange = (event) => {
    const { task } = this.state;
    const value = event.target.value;
    const name = event.target.name;
    task[name] = value;
    this.setState({ task });
  };

  componentWillMount(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ task: this.getTask() });
    }
  }

  editTask = (e) => {
    e.preventDefault();
    this.props.editTask(this.state.task);
    this.props.history.push("/myTasks");
  };

  handleBack = (e) => {
    e.preventDefault();
    // this.props.history.push("/myTasks");
  };

  render() {
    const { task } = this.state;
    return (
      <>
        <SubHeader subheader="Edit Task" />
        <section className="list_box">
          <form className="form_box" onSubmit={this.editTask}>
            <label className="label_box">
              <h4 className="label">Task</h4>
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                value={task.title}
                className="inputs"
                required
              />
            </label>

            <label className="label_box">
              <h4 className="label">Due Date</h4>
              <input
                type="date"
                name="date"
                onChange={this.handleChange}
                value={task.date}
                className="inputs"
              />
            </label>

            <label className="label_box">
              <h4 className="label">Difficulty</h4>
              <select
                name="option"
                value={task.option}
                onChange={this.handleChange}
                className="option"
              >
                <option value="" disabled>
                  Choose Difficulty
                </option>
                {this.state.chooseOption.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="label_box">
              <h4 className="label">Description</h4>
              <textarea
                type="text"
                name="description"
                onChange={this.handleChange}
                value={task.description}
                className="inputs"
              />
            </label>
            <div className="buttons">
              <Link className="button" to="/myTasks">Go Back</Link>
              {/* This button needs to be wired to go back to MyTasks */}
              <button className="button" type="submit">
                Save
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default withRouter(EditDetails);
