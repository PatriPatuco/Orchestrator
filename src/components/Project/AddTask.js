const AddTask = ({ showTaskInfo }) => {
  return (
    <section className="taskDetail">
      <div className="taskDetail__content">
        <h3 className="taskDetail__title">Add Task</h3>
        <span
          class="material-symbols-outlined taskDetail__close-btn"
          onClick={showTaskInfo}
        >
          close
        </span>
        <label htmlFor="title">
          <legend>Title</legend>
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
    </section>
  );
};

export default AddTask;