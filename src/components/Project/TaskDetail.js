const TaskDetail = ({ showTaskInfo, task }) => {
  console.log(task);

  return (
    <section className="taskDetail">
      <div className="taskDetail__container">
        <h3 className="taskDetail__title">{task.title}</h3>
        <span
          class="material-symbols-outlined taskDetail__close-btn"
          onClick={showTaskInfo}
        >
          close
        </span>
        <p className="taskDetail__desc">{task.desc}</p>

        <h4 className="taskDetail__info--title">Subtasks</h4>
        {task.subtask.map((subtask, index) => (
          <label className="taskDetail__subtask" key={index}>
            <input className="taskDetail__subtask--input" type="checkbox" />
            <span class="material-symbols-outlined checked-box">check</span>
            {subtask.def}
          </label>
        ))}
        <h4 className="taskDetail__info--title">Status</h4>
        <select className="taskDetail__status">
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>

        <h4 className="taskDetail__info--title">Due Date</h4>
        <input type="datetime-local" className="taskDetail__date"></input>
        <button className="taskDetail__button">
          <span class="material-symbols-outlined taskDetail__button--i">
            edit
          </span>
          Edit
        </button>
      </div>
    </section>
  );
};

// HTML PARA ADD TASK
{
  /* <section className="taskDetail">
  <div className="taskDetail__content">
    <h3 className="taskDetail__title"></h3>
    <label htmlFor="title">
      <legend>{task.title}</legend>
      <input
        type="text"
        name="title"
        id="title"
        placeholder={"e.g. Check mail Inbox"}
      />

      <legend>Description</legend>
      <textarea
        type="text"
        name="title"
        rows="6"
        placeholder="e.g. Look if you received any feedback from the brieffing sent
 to the client last Monday. "
      />

      <legend>Subtasks</legend>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="e.g. Clean spam mails"
      />
    </label>
  </div>
</section>; */
}

export default TaskDetail;
