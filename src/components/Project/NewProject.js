import React from 'react';
import BoardStatus from '../Project/BoardView/BoardStatus';

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
        <BoardStatus placeholder="TODO" />
        <BoardStatus placeholder="DOING" />
        <BoardStatus placeholder="DONE" />
      </div>
    </section>
  );
};

export default NewProject;
