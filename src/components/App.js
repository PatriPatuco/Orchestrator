import "../styles/__app.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./Sidebar/Navbar";
/* import {useLocation, matchPath } from "react-router"; */
import { Routes, Route, useLocation, matchPath} from "react-router-dom";
import taskData from "../services/taskData.json";
import Project from "../components/Project/Project";
import Home from "../pages/Home";
import Header from "./Header/Header";
import Options from "./Header/Options";
import ViewOptions from "./Header/ViewOptions";
import ProjectDetail from "../pages/ProjectDetail";

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const fakedata = [];
  const [projects, setProjects] = useState(taskData);

  // dynamic routes (projects id)

  const {pathname } = useLocation();
const routeData = matchPath('project/:id', pathname);
const projectId = routeData === null ? null : routeData.params.id;
const projectFound = projects.find((eachProject) => eachProject.id === projectId)
console.log(projectId)

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Home projects={projects} />

      <Routes>
        <Route path="/" element={<Project />}></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetail projectFound={projectFound} />}
        >
          Proyecto/id
        </Route>
      </Routes>
    </div>
  );
}

export default App;
