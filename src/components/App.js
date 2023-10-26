import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './Sidebar/Navbar';
import { Routes, Route } from 'react-router-dom';
import taskData from '../services/taskData.json';
import Home from '../pages/Home';
import Header from './Header/Header';
import NewProject from './Project/NewProject';
import ProjectDetail from '../pages/ProjectDetail';

function App() {

  const fakedata = [];
  const [projects] = useState(taskData);
  const [viewProject, setViewProject] = useState(false);

  const showView = () => {
    setViewProject(!viewProject);
  };

  return (
    <div className="main">
      <Header projects={projects} showView={showView} />
      <Navbar projects={projects} />

      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} viewProject={viewProject} />}
        ></Route>
        <Route
          path="/project/:id"
          element={
            <ProjectDetail projects={projects} viewProject={viewProject} />
          }
        ></Route>
        <Route
          path="/new"
          element={<NewProject projects={projects} viewProject={viewProject} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
