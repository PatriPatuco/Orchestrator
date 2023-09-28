import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import Navbar from '../components/Sidebar/Navbar';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import Project from '../components/Project/Project';

const Home = ({ projects }) => {
  return (
    <div className="home">
      <Project projects={projects} />
      {/* {projects > 0 ? (
        <Project projects={projects} />
      ) : (
        <Project projects={null}/>
      )} */}
    </div>
  );
};

export default Home;
