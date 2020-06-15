import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="user">
        <img className="avatar" alt="user avatar" src={props.avatar} />
        <h3>{props.name}</h3>
      </div>
      <Link to="/">Dashboard</Link>
      <Link to="/mytasks">My Tasks</Link>
      <Link to="/profile">My Profile</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
