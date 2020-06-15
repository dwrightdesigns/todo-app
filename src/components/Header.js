import React from "react";

function Header() {
  return (
    <header className="logo_wrapper">
      <img className="logo" alt="just do it logo" src={require("../img/logo192.png")} />
    </header>
  );
}

export default Header;