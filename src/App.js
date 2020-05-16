import React from "react";
import "./App.css";

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

const user = {
  name: "Denise Wright",
  avatar: "https://bit.ly/3fWa4Gw",
}

const tasks = [
  {
    id: 1,
    title: "Shopping List",
    completed: false
  },
  {
    id: 2,
    title: "School Assignments",
    completed: false
  },
  {
    id: 3,
    title: "Vacation Packing List",
    completed: false
  },
]

function App() {
  return (
    <>
      <header className="sidebar">
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="user">
          <img className="avatar" alt="user avatar" src={user.avatar}/>
          <h3>{user.name}</h3>
        </div>
        <ul>
          <li>My Tasks</li>
          <li>My Profile</li>
          <li>Settings</li>
        </ul>
      </header>
      <main>
        <div className="logo">
          <img alt="just do it logo" src="./logo192.png" />
        </div>
        <section className="sub__header">
          <h3>My Tasks</h3>
          <button>Edit Tasks</button>
        </section>
        <section className="inner__frame">
          <ul>
            {tasks.map((task) => (
              <li>{task.title}</li>
            ))}
          </ul>
          <div className="new__task">
            <i className="fas fa-plus-circle"></i>
            <h3>Create New Task</h3>
          </div>
        </section>
      </main>
      <footer>
        <cite>
          Designed By:{" "}
          <a href="https://denisewrightdesigns.com">Denise Wright</a>
        </cite>
      </footer>
    </>
  );
}

export default App;