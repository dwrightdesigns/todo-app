import React from "react";
import "./App.scss";
import Task from "./components/Task";
import Header from "./components/Header";
import Subheader from "./components/subheader";
import Additem from "./components/Additem";
import Footer from "./components/footer";
import { Burger, Menu } from "./components";
import List from "./components/List";

class App extends React.Component {
  state = {
    tasks: [
      {
        title: "Shopping List",
        completed: false,
        items: [],
      },
      {
        title: "School Assignments",
        completed: false,
        items: [],
      },
      {
        title: "Vacation Packing List",
        completed: false,
        items: [],
      },
    ],
    user: {
      name: "Denise Wright",
      avatar: "https://bit.ly/3fWa4Gw",
    },
    menuActive: false,
    currentTask: [
      {
        title: "Sample To Do",
        completed: false,
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

  toggleMenu = (toggle) => {
    this.setState({ menuActive: toggle });
  };

  addTask = (task) => {
    const tasks = [...this.state.tasks];
    tasks.push({ title: task, completed: false });
    this.setState({ tasks });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Burger open={this.state.menuActive} setOpen={this.toggleMenu} />
          <Menu
            open={this.state.menuActive}
            setOpen={this.toggleMenu}
            avatar={this.state.user.avatar}
            name={this.state.user.name}
          />
          <Header />
          <main>
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
                {this.state.tasks.map(
                  (taskObj, index) =>
                    this.state.isEmptyState && (
                      <Task
                        addTrip={this.triggerAddTripState}
                        task={taskObj}
                        key={index}
                        toggle={this.toggleTask}
                        delete={this.deleteTask}
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
                <Additem handleAdd={this.addTask} />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
