import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "orange",
  };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses" exact>
        courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about" exact>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
