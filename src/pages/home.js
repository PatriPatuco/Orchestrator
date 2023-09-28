import React from "react";
import Project from "../components/Project/Project";

const Home = ({ projects }) => {
  return (
    <>

    <Project projects={projects}/>
      {/* {projects > 0 ? (
        <Project projects={projects} />
      ) : (
        <Project projects={null}/>
      )} */}
    </>
  );
};

export default Home;
