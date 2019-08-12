import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
function navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          MarioPlan
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
}

export default navbar;
