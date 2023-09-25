import TaskStatus from "./TaskStatus";
import AddButton from "./AddButton";
import "../../styles/__project.scss";

const Project = () => {



  return (
    <section className="project">
      <input
        type="text"
        className="project__title"
        placeholder="New Project"
      ></input>
      <button>Save</button>
      <div className="project__status">
        <TaskStatus placeholder="TODO" />
        <TaskStatus placeholder="DOING" />
        <TaskStatus placeholder="DONE" />
      </div>
    </section>
  );
  }

export default Project;



/* const Project = ({ taskData }) => {
  const renderButton = () => {
    if (taskData.length < 10) {
      return <AddButton />;
    }

    /* objeto task
    objeto tarea
    objeto status */
/*   }; */

 /*  return (
    <section className="project">
      <h2 className="project__title">{taskData[0].projectTitle}</h2>
      <div className="project__status">
        <TaskStatus
          status="TODO"
          tasks={taskData[0].tasks.filter((task) => task.status === "TODO")}
        />
        <TaskStatus
          status="DOING"
          tasks={taskData[0].tasks.filter((task) => task.status === "DOING")}
        />
        <TaskStatus
          status="DONE"
          tasks={taskData[0].tasks.filter((task) => task.status === "DONE")}
        />

        {renderButton()}
      </div>
    </section>
  );
}; */