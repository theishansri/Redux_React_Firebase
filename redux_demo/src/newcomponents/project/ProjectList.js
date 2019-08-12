import React from "react";
import ProjectSummary from "./ProjectSummary";
function ProjectList(prop) {
  return (
    <div className="project-list section">
      {prop.project &&
        prop.project.map(p => {
          return <ProjectSummary project={p} key={p.id} />;
        })}
    </div>
  );
}

export default ProjectList;
