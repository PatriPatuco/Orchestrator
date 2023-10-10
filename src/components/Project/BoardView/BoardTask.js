const BoardTask = ({ item }) => {
  return (
    <div className="project__status--task">
      <h4 className="project__status--task--title">{item.title}</h4>
      <h5 className="project__status--task--subtask">
        {`0/${item.subtask.length} subtasks`}
      </h5>
    </div>
  );
};
export default BoardTask;
