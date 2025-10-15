import { useState } from "react";
import AddTask from "./AddTask";

const TaskDetail = ({ showTaskInfo, task, project }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

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
          {project.status.map((status, index) => (
            <option key={index}>{status.name}</option>
          ))}
        </select>

        <h4 className="taskDetail__info--title">Due Date</h4>
        <input type="datetime-local" className="taskDetail__date"></input>
        <button className="taskDetail__button" onClick={handleEditClick}>
          <span class="material-symbols-outlined taskDetail__button--i">
            edit
          </span>
          Edit
        </button>
      </div>

      {isEditing && <AddTask showTaskInfo={showTaskInfo} />}
    </section>
  );
};
export default TaskDetail;
