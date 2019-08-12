import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title text-darken-4">Project Title = {id}</span>
          <p>Lets get some tea I asd sds fdf asd fkka s </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>Posted By me</div>
          <div>2nd September, 2a.m</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
