import React from "react";
import { NavLink } from "react-router-dom";

function SignedOut() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/SignUp">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/SignIn">LogIn</NavLink>
      </li>
    </ul>
  );
}

export default SignedOut;
