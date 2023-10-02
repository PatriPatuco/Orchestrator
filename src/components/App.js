import '../styles/__app.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './Sidebar/Navbar';
/* import {useLocation, matchPath } from "react-router"; */
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import taskData from '../services/taskData.json';
import Project from '../components/Project/Project';
import Home from '../pages/Home.js';
import Header from './Header/Header';
import ViewOptions from './Header/ViewOptions';
import ProjectDetail from '../pages/ProjectDetail';

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const fakedata = [];
  const [projects, setProjects] = useState(taskData);
  const [viewProject, setViewProject] = useState(false);

  // dynamic routes (projects id)

  const { pathname } = useLocation();
  const routeData = matchPath('/project/:id', pathname);
  const projectId = routeData !== null ? routeData.params.id : null;
  const filteredChar = () => {
    return projects.filter((eachChar) => {
      return eachChar.id;
    });
  };

  const projectFound = filteredChar().find(
    (value) => value.id === parseInt(projectId)
  );
  console.log(projectFound);

  // === parseInt(projectId)
  // const projectFound = projects.map((eachp) => eachp);
  // .find((value) => value === parseInt(projectId));

  const showView = () => {
    setViewProject(!viewProject);
  };

  // const idValue = projects
  //   .map((eachp) => eachp.id)
  //   .find((value) => value === parseInt(projectId));
  // console.log(idValue);
  // console.log(projectId);

  // if (idValue === parseInt(projectId)) {
  //   return console.log('Olé');
  // } else {
  //   console.log('caca');
  // }
  // const projectFiltered = projects.filter((p) => {
  //   return p.id === projectId;
  // });
  // console.log(projectFiltered);

  return (
    <div className="main">
      <Header projects={projects} showView={showView} />
      <Navbar projects={projects} />

      <Home projects={projects} viewProject={viewProject} />
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
