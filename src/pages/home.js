import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import Navbar from '../components/Sidebar/Navbar';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <ProjectDetail />
    </div>
  );
};

export default Home;
