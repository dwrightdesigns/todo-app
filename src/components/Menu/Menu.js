import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} ariaHidden={!isHidden} {...props}>
      <div className="user">
        <img className="avatar" alt="user avatar" src={props.avatar} />
        <h3>{props.name}</h3>
      </div>
      <a href="/" tabIndex={tabIndex}>
        <span ariaHidden="true"></span>
        My Tasks
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span ariaHidden="true"></span>
        My Profile
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span ariaHidden="true"></span>
        Settings
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
