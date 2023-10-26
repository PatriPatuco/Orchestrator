const TaskDetail = ({showTaskInfo, task}) => {


  console.log(task);

    return (
      <section className="taskDetail">
        <div className="taskDetail__content">
          <span class="material-symbols-outlined">close</span>
          <h3 className="taskDetail__title">{task.title}</h3>
          <p className="taskDetail__desc">{task.desc}</p>

          <h4 className="taskDetail__info--title">Subtasks</h4>
          {task.subtask.map((subtask, index) => (
            <label className="taskDetail__subtask" key={index}>
              <input type="checkbox" placeholder="e.g. Clean spam mails" />{" "}
              {subtask.def}
            </label>
          ))}
          <h4 className="taskDetail__info--title">Status</h4>
          <select>
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>

          <h4 className="taskDetail__info--title">Due Date</h4>
          <input type="datetime-local"></input>
          <button className="taskDetail__button">Editar</button>
        </div>
      </section>
    );
}



{/* <section className="taskDetail">
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
</section>; */}

export default TaskDetail;