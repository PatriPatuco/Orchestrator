import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskStatus from './TaskStatus';
import AddButton from './AddButton';
import '../../styles/__project.scss';

const Project = ({ projectFound }) => {
  const [statuses, setStatuses] = useState([]);
  console.log('statuses', statuses);

  useEffect(() => {
    // Verifica si projectFound tiene status y establece el estado
    if (projectFound && projectFound.status) {
      setStatuses(projectFound.status);
    }
  }, [projectFound]);
  console.log(projectFound);
  return (
    <>
      {projectFound ? (
        <section className="project">
          <input
            type="text"
            className="project__title"
            placeholder={projectFound.title}
          ></input>
          <div className="project__status">
            {/* Mapear los status del proyecto */}
            {statuses.map((statusItem, index) => (
              <TaskStatus key={index} item={statusItem} />
            ))}
          </div>
        </section>
      ) : (
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
      )}
    </>
  );
};

export default Project;

/* const Project = ({ taskData }) => {
  const renderButton = () => {
    if (taskData.length < 10) {
      return <AddButton />;
    }

    /* objeto task
    objeto tarea
    objeto status */
/*   }; */

/*  return (
    <section className="project">
      <h2 className="project__title">{taskData[0].projectTitle}</h2>
      <div className="project__status">
        <TaskStatus
          status="TODO"
          tasks={taskData[0].tasks.filter((task) => task.status === "TODO")}
        />
        <TaskStatus
          status="DOING"
          tasks={taskData[0].tasks.filter((task) => task.status === "DOING")}
        />
        <TaskStatus
          status="DONE"
          tasks={taskData[0].tasks.filter((task) => task.status === "DONE")}
        />

        {renderButton()}
      </div>
    </section>
  );
}; */
