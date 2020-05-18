import React from "react";
import "./App.css";
import Task from "./components/Task";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Subheader from "./components/subheader";
import Additem from "./components/Additem";
import Footer from "./components/footer";

const user = {
  name: "Denise Wright",
  avatar: "https://bit.ly/3fWa4Gw",
};

const tasks = [
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
];

function App() {
  return (
    <>
      <Nav avatar={user.avatar} name={user.name} />
      <Header />
      <main>
        <section className="sub__header">
          <Subheader subheader="My Tasks" button="Edit Tasks" />
        </section>
        <section className="list_box">
          <ul>
            {tasks.map((taskObj, index) => (
              <Task task={taskObj} key={index} />
            ))}
          </ul>
          <div className="new__task">
            <Additem add="Create New Task" />
          </div>
        </section>
      </main>
          <Footer/>
    </>
  );
}

export default App;
