import "../styles/__app.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./Sidebar/Navbar";
import Project from "./Project/Project";
import { Routes, Route } from "react-router-dom";
import taskData from "../services/taskData.json";
import ProjectDetail from "../pages/ProjectDetail";
import Home from "../pages/Home";
import Header from "./Header/Header";
import Options from "./Header/Options";
import ViewOptions from "./Header/ViewOptions";

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const [projects, setProjects] = useState(taskData);
  const [newProject, setNewProject] = useState({
    projectTitle: "New Project",
    tasks: [
      {
        id: 1,
        title: "Task 1",
        status: "TODO",
        desc: "Lorem Ipsum",
        substack: {
          id: 1,
          def: "Lorem Ipsum",
        },
      },
    ],
  });

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Home taskData={taskData} />
      <Routes>
        <Route path="/"></Route>
        <Route path="/Project/id">Proyecto/id</Route>
      </Routes>
    </>
  );
}

export default App;
