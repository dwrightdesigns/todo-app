import React from "react";

function Nav(props) {
  return (
    <nav className="sidebar">
      <div className="toggle-btn">
        <i className="fas fa-bars"></i>
      </div>
      <div className="user">
        <img className="avatar" alt="user avatar" src={props.avatar} />
        <h3>{props.name}</h3>
      </div>
      <ul>
        <li>My Tasks</li>
        <li>My Profile</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Nav;