import React from 'react';
import NewProject from '../components/Project/NewProject';

<<<<<<< HEAD
const Home = ({ projects, viewProject, retracted }) => {
  return (
    <div className={retracted ? 'home retracted' : 'home'}>
      <NewProject projects={projects} viewProject={viewProject} />
=======
const Home = ({ projects, viewProject }) => {
  return (
    <div className="home">
      <NewProject projects={projects} viewProject={viewProject} />
      {/* {projects > 0 ? (
        <Project projects={projects} />
      ) : (
        <Project projects={null}/>
      )} */}
      {/* {viewProject &&
          projects.map((item, index) => {
            return (
              <li key={index} className="sidebar__nav--ulp--l">
                <Link to={`/project/${item.id}`}>{item.title}</Link>
              </li>
            );
          })} */}
>>>>>>> projectSection
    </div>
  );
};

export default Home;
