import React from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open, ...props }) => {
  return (
    <StyledMenu open={open} {...props}>
      <div className="user">
        <img className="avatar" alt="user avatar" src={props.avatar} />
        <h3>{props.name}</h3>
      </div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/mytasks">My Tasks</Link>
      <Link to={"/profile/" + props.users.id}>My Profile</Link>
      <Link to="/">Login</Link>
    </StyledMenu>
  );
};

export default Menu;
