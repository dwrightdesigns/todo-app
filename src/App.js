import React from "react";
import "./App.css";
import Task from "./components/Task";
// import Nav from "./components/menu/Menu";
import Header from "./components/Header";
import Subheader from "./components/subheader";
import Additem from "./components/Additem";
import Footer from "./components/footer";
import { Burger, Menu } from "./components";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Shopping List",
        completed: false,
      },
      {
        id: 2,
        title: "School Assignments",
        completed: false,
      },
      {
        id: 3,
        title: "Vacation Packing List",
        completed: false,
      },
    ],
    user: {
      name: "Denise Wright",
      avatar: "https://bit.ly/3fWa4Gw",
    },
    menuActive: false,
  };

  toggleMenu = (toggle) => {
      this.setState({menuActive: toggle})
  }

  render() {

    return (
      <>
        <Burger open={this.state.menuActive} setOpen={this.toggleMenu} />
        <Menu open={this.state.menuActive} setOpen={this.toggleMenu} avatar={this.state.user.avatar} name={this.state.user.name} />
        <Header />
        <main>
          <section className="sub__header">
            <Subheader
              subheader="My Tasks"
              button="Edit Tasks"
              open={this.state.menuActive}
              onClick={() => this.toggleMenu(!this.state.menuActive)}
            />
          </section>
          <section className="list_box">
            <ul>
              {this.state.tasks.map((taskObj, index) => (
                <Task task={taskObj} key={index} />
              ))}
            </ul>
            <div className="new__task">
              <Additem add="Create New Task" />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
