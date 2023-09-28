import "../styles/__app.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./Sidebar/Navbar";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import taskData from "../services/taskData.json";
import ProjectDetail from "../pages/ProjectDetail";
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
  const projectId = dataUrl !== null ? dataUrl.params.id : null;
  const findProject = taskData.find(
    (eachProject) => eachProject.id === projectId
  );

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Home projects={projects} findProject={findProject} />

      <Routes>
        <Route path="/"></Route>
        <Route path="/project/:id" element={<ProjectDetail/>}>Proyecto/id</Route>
      </Routes>
    </>
  );
}

export default App;
