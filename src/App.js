import React from "react";
import "./App.scss";
import Task from "./components/Task";
import Header from "./components/Header";
import Subheader from "./components/subheader";
import Additem from "./components/Additem";
import Footer from "./components/footer";
import { Burger, Menu } from "./components";
import List from "./components/List";

const TASKS_KEY = "justdoit_app";

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

  toggleMenu = (toggle) => {
    this.setState({ menuActive: toggle });
  };

  addTask = (task) => {
    const tasks = [...this.state.tasks];
    tasks.push({ title: task, completed: false });
    this.setState({ tasks });
  };

  toggleTask = (task) => {
    const { tasks } = this.state;
    const taskIndex = tasks.findIndex((t) => t.title === task.title);
    task.completed = !task.completed;
    tasks.splice(taskIndex, 1, task);
    this.setState({ tasks });
  };

  deleteTask = (title) => {
    const { tasks } = this.state;
    const taskIndex = tasks.findIndex((task) => task.title === title);
    tasks.splice(taskIndex, 1);
    this.setState({ tasks });
  };

  componentDidMount() {
    const tasksString = localStorage.getItem(TASKS_KEY)
    if (tasksString) {
      this.setState({tasks: JSON.parse(tasksString) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem(TASKS_KEY, JSON.stringify(this.state.tasks));
    } 
  }

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
