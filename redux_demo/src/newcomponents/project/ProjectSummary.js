import React from "react";

export default function ProjectSummary(props) {
  console.log(props);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.project.title}</span>
        <p>Posted By me</p>
        <p className="grey-text">3rd September, 2a.m</p>
      </div>
    </div>
  );
}
