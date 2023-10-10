import React from 'react';
import BoardTask from './BoardTask';
import { useState, useEffect } from 'react';

const TaskStatus = (props) => {
  console.log(props.item);
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   // Verifica si TaskStatus tiene tasks y establece el estado
  //   if (item && item.tasks) {
  //     setTasks(item.tasks);
  //   }
  // }, [item]);

  if (!props.item) {
    return null; // Si no hay item, lo deja limpio
  }

  return (
    <div className="project__status--column">
      <input
        type="text"
        className="project__status--title"
        placeholder={props.item.name || ''}
      ></input>
      <span className="project__status--span">{`(${props.item.tasks.length})`}</span>
      {props.item.tasks.map((taskItem, index) => (
        <BoardTask
          key={index}
          item={taskItem}
          viewProject={props.viewProject}
        />
      ))}
    </div>
  );
};

export default TaskStatus;

/* const TaskStatus = ({ status, tasks }) => {
  const renderButton = () => {
    if (tasks.length <= 9) {
      return <AddButton />;
    }
  };

  return (
    <div className="project__status--column">
      <h3 className="project__status--title">
        {status} <span>({tasks.length})</span>
      </h3>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} status={task.status} />
      ))}

      {renderButton()}
    </div>
  );
}; */
