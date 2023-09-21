const Task = ({title, status}) => {
    return (
      <div className="project__status--task">
        <h4 className="project__status--task--title">{title}</h4>
        <h5 className="project__status--task--subtask">0/0 subtasks</h5>
      </div>
    );
}
 export default Task;


