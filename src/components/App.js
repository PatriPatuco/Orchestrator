import '../styles/__app.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './Sidebar/Navbar';
import { Routes, Route } from 'react-router-dom';
import taskData from '../services/taskData.json';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';
import Header from './Header/Header';
import ViewOptions from './Header/ViewOptions';

function App() {
  // const [taskList, setTaskList] = useState(true);
  const fakedata = [];
  const [projects, setProjects] = useState(taskData);
  const [newProject, setNewProject] = useState({
    projectTitle: 'New Project',
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        status: 'TODO',
        desc: 'Lorem Ipsum',
        substack: {
          id: 1,
          def: 'Lorem Ipsum',
        },
      },
    ],
  });

  return (
    <div className="main">
      <Header />
      <Navbar
        projects={projects}
        setProjects={setProjects}
        // taskList={taskList}
        // setTaskList={setTaskList}
      />
      <Routes>
        <Route path="/" element={<Home projects={projects} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
