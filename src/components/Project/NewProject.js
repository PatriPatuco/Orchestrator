import React from 'react';
import TaskStatus from './TaskStatus';

const NewProject = () => {
  return (
    <section className="project">
      <input
        type="text"
        className="project__title"
        placeholder="New Project"
      ></input>
      <button>Save</button>
      <div className="project__status">
        <TaskStatus placeholder="TODO" />
        <TaskStatus placeholder="DOING" />
        <TaskStatus placeholder="DONE" />
      </div>
    </section>
  );
};

export default NewProject;
