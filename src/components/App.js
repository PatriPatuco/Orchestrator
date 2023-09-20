import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './Sidebar/Navbar';
import Project from './Project/Project';
import { Routes, Route } from 'react-router-dom';
import taskData from '../services/taskData.json';

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const [projects, setProjects] = useState(taskData);

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Routes>
        <Route path="/Project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
