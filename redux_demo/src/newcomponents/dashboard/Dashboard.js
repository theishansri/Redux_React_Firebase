import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList project={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};
export default connect(
  mapStateToProps,
  null
)(Dashboard);
