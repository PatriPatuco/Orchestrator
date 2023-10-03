import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";

const TaskStatus = ({ item }) => {
  console.log(item);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Verifica si TaskStatus tiene tasks y establece el estado
    if (item && item.tasks) {
      setTasks(item.tasks);
    }
  }, [item]);


  if (!item) {
    return null; // Si no hay item, lo deja limpio
  }

  return (
    <div className="project__status--column">
      <input
        type="text"
        className="project__status--title"
        placeholder={item.name || ""}
      ></input>
      <span className="project__status--span">{`(${item.tasks.length})`}</span>
      {tasks.map((taskItem, index) => (
        <Task key={index} item={taskItem} />
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
