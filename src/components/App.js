import "../styles/__app.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./Sidebar/Navbar";
import { Routes, Route, useLocation, useParams, matchPath} from "react-router-dom";
import taskData from "../services/taskData.json";
import Project from "../components/Project/Project";
import Home from "../pages/Home";
import Header from "./Header/Header";
/* import Options from "./Header/Options"; */
import ViewOptions from "./Header/ViewOptions";
import ProjectDetail from "../pages/ProjectDetail";

function App() {
  // const [sidebar, setSidebar] = useState(false);

  const fakedata = [];
  const [projects, setProjects] = useState(taskData);
   const [projectDet, setProjectDet] = useState({});

   console.log("info guardada", projectDet)
/*    console.log(projects) */

  // dynamic routes (projects id)

  return (
    <>
      <Navbar projects={projects} setProjects={setProjects} />
      <Home projects={projects} />

      <Routes>
        <Route path="/" element={<Project />}></Route>
        <Route
          path="/project/:id"
          element={
            <ProjectDetail projects={projects}/>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
