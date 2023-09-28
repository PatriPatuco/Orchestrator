import React from "react";
import Project from "../components/Project/Project";

const ProjectDetail = ({ projectFound }) => {
  console.log(`${projectFound} "esto es la info del proyecto en detail"`);
  return <Project project={projectFound} />;
};

export default ProjectDetail;
