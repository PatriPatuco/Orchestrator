import React from 'react';
import BoardTask from './BoardTask';

const TaskStatus = (props) => {

  if (!props.item) {
    return null; // Si no hay item, lo deja limpio
  }

  return (
    <section className="project__status--column">
      <div className="project__status--header">
        <input
          type="text"
          className="project__status--title"
          placeholder={props.item.name || ""}
        ></input>
        <span className="project__status--span">{`(${props.item.tasks.length})`}</span>
      </div>
      {props.item.tasks.map((taskItem, index) => (
        <BoardTask
          key={index}
          item={taskItem}
          viewProject={props.viewProject}
          showTaskInfo={props.showTaskInfo}
        />
      ))}
    </section>
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
