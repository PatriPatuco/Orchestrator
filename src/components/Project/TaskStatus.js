import Task from './Task';
import AddButton from './AddButton';

const TaskStatus = ({placeholder}) => {

  return (
    <div className="project__status--column">
      <input
        type="text"
        className="project__status--title"
        placeholder={placeholder}
      ></input>
      <span></span>

      <Task />
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