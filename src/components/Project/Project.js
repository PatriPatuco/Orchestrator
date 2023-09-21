import React from 'react';
import Navbar from '../Sidebar/Navbar';
import TaskStatus from './TaskStatus';
const Project = ({ taskData }) => {
  return (
    <>
      <section className="project">
        <h2 className="project__title">{taskData[0].projectTitle}</h2>
        <div className="project__status">
          <TaskStatus
            status="TODO"
            tasks={taskData[0].tasks.filter((task) => task.status === 'TODO')}
          />
          <TaskStatus
            status="DOING"
            tasks={taskData[0].tasks.filter((task) => task.status === 'DOING')}
          />
          <TaskStatus
            status="DONE"
            tasks={taskData[0].tasks.filter((task) => task.status === 'DONE')}
          />
        </div>
      </section>
    </>
  );
};

export default Project;
