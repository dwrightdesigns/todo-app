import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import { Burger, Menu } from "./components";
import MyTasks from "./components/MyTasks";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import EditDetails from "./components/editDetails";
import ViewDetails from "./components/viewDetails";
import { v4 as uuidv4 } from "uuid";
import Login from "./components/Login/login";
import Register from "./components/Login/register";

const TASKS_KEY = "justdoit_app";

function timeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeofDay;
  let background;

  if (hours < 12) {
    timeofDay = "Good Morning";
    background = styles.morningBg;
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "Good Afternoon";
    background = styles.afternoonBg;
  } else {
    timeofDay = "Good Evening";
    background = styles.eveningBg;
  }

  return { timeofDay, background };
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "1",
          displayName: "Denise",
          fullName: "Denise Wright",
          email: "test@kenzie.academy",
          password: "test123",
          avatar: "/img/denise-wright.jpg",
        },
      ],
      tasks: [
        {
          id: "1",
          title: "Take out trash",
          completed: false,
          items: [],
          date: "",
          option: "",
          description: "",
        },
        {
          id: "2",
          title: "Finish Assignment",
          completed: false,
          items: [],
          date: "",
          option: "",
          description: "",
        },
        {
          id: "3",
          title: "Pack for Trip",
          completed: false,
          items: [],
          date: "",
          option: "",
          description: "",
        },
      ],
      menuActive: false,
      error: false,
      isLogginActive: true,
    };
  }

  toggleMenu = (toggle) => {
    this.setState({ menuActive: toggle });
  };

  addTask = (task) => {
    const tasks = [...this.state.tasks];
    tasks.push({
      title: task,
      completed: false,
      id: uuidv4(),
      option: "",
      date: "",
      description: "",
    });
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

  editTask = (task) => {
    const { tasks } = this.state;
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(taskIndex, 1, task);
    this.setState({ tasks });
  };

  componentDidMount() {
    const tasksString = localStorage.getItem(TASKS_KEY);
    if (tasksString) {
      this.setState({ tasks: JSON.parse(tasksString) });
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
            avatar={this.state.users[0].avatar}
            name={this.state.users[0].fullName}
            users={this.state.users[0]}
          />
          <Header />
          <main style={timeOfDay().background} className="center wrapper">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/register">
                <Register users={this.state.users[0]} />
              </Route>
              <Route path="/dashboard">
                <Dashboard
                  greeting={timeOfDay().timeofDay}
                />
              </Route>
              <Route path="/mytasks">
                <MyTasks
                  tasks={this.state.tasks}
                  addTask={this.addTask}
                  deleteTask={this.deleteTask}
                  toggleTask={this.toggleTask}
                />
              </Route>
              <Route path="/profile/:userId">
                <Profile users={this.state.users} />
              </Route>
              <Route path="/editTask/:taskId">
                <EditDetails
                  tasks={this.state.tasks}
                  editTask={this.editTask}
                />
              </Route>
              <Route path="/task/:taskId">
                <ViewDetails tasks={this.state.tasks} />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

const styles = {
  morningBg: {
    backgroundImage: `url("./img/background.jpg")`,
  },
  afternoonBg: {
    backgroundImage: `url("./img/john-jason-aF99M98c_uk-unsplash.jpg")`,
  },
  eveningBg: {
    backgroundImage: `url("./img/paul-matheson-kIdprAuzDvc-unsplash.jpg")`,
  },
};

export default App;
