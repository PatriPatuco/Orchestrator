import React from 'react';
import NewProject from '../components/Project/NewProject';

const Home = ({ projects, viewProject, retracted }) => {
  return (
    <div className={retracted ? 'home retracted' : 'home'}>
      <NewProject projects={projects} viewProject={viewProject} />
    </div>
  );
};

export default Home;
