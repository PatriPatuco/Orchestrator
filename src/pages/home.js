import React from 'react';
import Project from '../components/Project/Project';

const Home = ({taskData}) => {
  return (
    <>
      Home
      <Project taskData={taskData} />
    </>
  );
};

export default Home;
