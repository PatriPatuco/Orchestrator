import "../styles/__app.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./Sidebar/Navbar";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import taskData from "../services/taskData.json";
import Project from "../components/Project/Project";
import Home from "../pages/Home";
import Header from "./Header/Header";
import Options from "./Header/Options";
import ViewOptions from "./Header/ViewOptions";

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const fakedata = [];
  const [projects, setProjects] = useState(taskData);


  // dynamic routes (projects id)

  const { pathname } = useLocation();
  const dataUrl = matchPath("/project/:id", pathname);

  console.log(dataUrl);


  const getRouteProject = () => {
    if (dataUrl) {
      const routeProjectId = dataUrl !== null ? dataUrl.params.id : null;
      const routeProject = projects.find((project) => {
        return project.id === routeProjectId;
      });
      if (routeProject) {
        return routeProject;
      } else {
        return {};
      }
    }
  }


 

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Home />


        <Routes>
          <Route path="/" element={<Project />}></Route>
          <Route
            path="/project/:id"
            element={<Project projectInfo={getRouteProject()} />}
          >
            Proyecto/id
          </Route>
        </Routes>
    </>
  );
}

export default App;
