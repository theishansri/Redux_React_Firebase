import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./newcomponents/Layout/navbar";
import Dashboard from "./newcomponents/dashboard/Dashboard";
import ProjectDetails from "./newcomponents/project/ProjectDetails";
import SignIn from "./newcomponents/auth/SignIn";
import SignUp from "./newcomponents/auth/SignUp";
import CreateProject from "./newcomponents/project/CreateProject";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
