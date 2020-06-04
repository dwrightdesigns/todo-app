import React from "react";
import Task from "./Task";
import Subheader from "./subheader";
import Additem from "./Additem";
import List from "./List";




class myTasks extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.onEdit = this.onEdit.bind(this);
  // }
  state = {   
    user: {
      name: "Denise Wright",
      avatar: "https://bit.ly/3fWa4Gw",
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
        <section className="sub__header">
          <Subheader
            addTrip={this.triggerDelete}
            subheader="My Tasks"
            button="Edit Tasks"
            open={this.state.menuActive}
            onClick={() => this.toggleMenu(!this.state.menuActive)}
          />
        </section>
        <section className="list_box">
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

          <div className="new__task">
            <Additem handleAdd={this.props.addTask} />
          </div>
        </section>
      </>
    );
  }
}

export default myTasks;
