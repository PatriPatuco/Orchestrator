import Task from "./Task";
import AddButton from "./AddButton";

const TaskStatus = ({ status, tasks }) => {

   const renderButton = () => {
    if (tasks.length <= 9) {
      return <AddButton/>
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
};

export default TaskStatus;
