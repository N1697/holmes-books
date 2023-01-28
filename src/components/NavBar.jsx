import React from "react";
import holmesLogo from "../holmes-logo.jpg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={holmesLogo} alt="holmesLogo" className="navbar-logo" />
    </nav>
  );
};

export default NavBar;
