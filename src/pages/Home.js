import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import Navbar from '../components/Sidebar/Navbar';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import Project from '../components/Project/Project';

const Home = ({ projects, viewProject }) => {
  return (
    <div className="home">
      <ProjectDetail projects={projects} />
      {/* {projects > 0 ? (
        <Project projects={projects} />
      ) : (
        <Project projects={null}/>
      )} */}
      {viewProject &&
        projects.map((item, index) => {
          return (
            <li key={index} className="sidebar__nav--ulp--l">
              <Link to={`/project/${item.tasks}`}>{item.title}</Link>
            </li>
          );
        })}
    </div>
  );
};

export default Home;
