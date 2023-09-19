import Task from "./Task";

const TaskStatus = ({ status, tasks }) => {
  return (
    <div>
      <h3>{status} ({tasks.length})</h3>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} status={task.status} />
      ))}
    </div>
  );
};

export default TaskStatus;
