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
  const [list, setList] = useState(false);

  const showList = () => {};

  // dynamic routes (projects id)

  const { pathname } = useLocation();
  const routeData = matchPath('/project/:id', pathname);
  const projectId = routeData !== null ? routeData.params.id : null;
  const projectFound = projects
    .map((eachp) => eachp.id)
    .find((value) => value === parseInt(projectId));

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
      <Header />
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
