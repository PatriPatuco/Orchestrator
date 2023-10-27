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
  // const [sidebar, setSidebar] = useState(false);

  const fakedata = [];
  const [projects] = useState(taskData);
  const [viewProject, setViewProject] = useState(false);
  const [retracted, setRetracted] = useState(false);

  const showView = () => {
    setViewProject(!viewProject);
  };

  return (
    <div className={retracted ? 'main retracted' : 'main'}>
      <Header projects={projects} showView={showView} />
      <Navbar
        projects={projects}
        setRetracted={setRetracted}
        retracted={retracted}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              projects={projects}
              viewProject={viewProject}
              retracted={retracted}
            />
          }
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

// const { id } = useParams();
// const projectId = parseInt(id, 10);

// const projectFound = projects.find((value) => value.id === projectId);
// console.log(projectFound);

// === parseInt(projectId)
// const projectFound = projects.map((eachp) => eachp);
// .find((value) => value === parseInt(projectId));
