const BoardTask = ({ item, showTaskInfo }) => {

  const handleClick = () => {
    showTaskInfo(item);
  }

  return (
    <article
      className="project__status--task"
      onClick={handleClick}
    >
      <h4 className="project__status--task--title">{item.title}</h4>
      <h5 className="project__status--task--subtask">
        {`0/${item.subtask.length} subtasks`}
      </h5>
    </article>
  );
};
export default BoardTask;