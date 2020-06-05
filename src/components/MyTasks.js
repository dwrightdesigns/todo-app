import React from "react";
import Task from "./Task";
import Subheader from "./subheader";
import Additem from "./Additem";
import List from "./List";
import styled from "styled-components";

class myTasks extends React.Component {
  state = {
    user: {
      name: "Denise Wright",
      avatar: "/img/denise-wright.jpg",
    },
    currentTask: [
      {
        title: "Sample To Do",
        completed: false,
        items: [],
      },
    ],
    isEmptyState: true,
  };

  triggerAddTripState = () => {
    this.setState({ ...this.state, isEmptyState: false, isAddTripState: true });
  };

  triggerTasks = () => {
    this.setState({ ...this.state, isEmptyState: true, isAddTripState: false });
  };

  render() {
    return (
      <>
        <StyledSub>
          <Subheader
            addTrip={this.triggerDelete}
            subheader="My Tasks"
            button="Edit Tasks"
            open={this.state.menuActive}
            onClick={() => this.toggleMenu(!this.state.menuActive)}
          />
        </StyledSub>
        <StyledList>
          <ul id="tasks">
            {this.props.tasks.map(
              (taskObj, index) =>
                this.state.isEmptyState && (
                  <Task
                    addTrip={this.triggerAddTripState}
                    task={taskObj}
                    key={index}
                    toggle={this.props.toggleTask}
                    delete={this.props.deleteTask}
                  />
                )
            )}
            {this.state.isAddTripState && (
              <List
                addTrip={this.triggerTasks}
                completed={this.state.tasks.completed}
                list={this.state.currentTask.items}
              />
            )}
          </ul>

          <StyledTask>
            <Additem handleAdd={this.props.addTask} />
          </StyledTask>
        </StyledList>
      </>
    );
  }
}

const StyledSub = styled.section`
  align-items: center;
  color: var(--dark-color);
  display: flex;
  justify-content: space-between;
`;

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  border-top: 2px solid rgba(220, 220, 220, 1);
`;

const StyledList = styled.section`
  background-color: var(--lighter-color);
  width: 400px;
  margin: auto;
  border-radius: 4px;
  margin-top: 1rem;
`;

export default myTasks;
