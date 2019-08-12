import React from "react";
import { Link, NavLink } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Pluralsight, Administration</h1>
        <p>React, Redux tutorial</p>
        <Link to="/about">
          <button className="btn btn-primary btn-lg">About Page</button>
        </Link>
      </div>
    </div>
  );
}
export default Homepage;
