import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = {
    color: "purple"
  };
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink
              to="/"
              className="navbar-brand"
              activeStyle={activeStyle}
              exact
            >
              Redux demo
            </NavLink>
          </div>
          <ul className="nav navbar">
            <li className="active">
              <NavLink to="/" activeStyle={activeStyle} exact>
                Home
              </NavLink>
            </li>
            &nbsp;
            {"|"}
            &nbsp;
            <li>
              <NavLink to="/about" activeStyle={activeStyle}>
                About
              </NavLink>
            </li>
            &nbsp;
            {"|"}
            &nbsp;
            <li>
              <NavLink to="/course" activeStyle={activeStyle}>
                Courses
              </NavLink>
            </li>
            &nbsp;
            {"|"}
            &nbsp;
            <li>
              <NavLink to="/demo" activeStyle={activeStyle}>
                Demo
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            &nbsp;
            {"|"}
            &nbsp;
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
