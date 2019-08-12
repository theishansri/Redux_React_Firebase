import React from "react";
import { NavLink } from "react-router-dom";

function SignedIn() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lightnen-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedIn;
