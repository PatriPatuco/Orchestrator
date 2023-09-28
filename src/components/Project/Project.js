import TaskStatus from "./TaskStatus";
import AddButton from "./AddButton";
import "../../styles/__project.scss";

const Project = ({ projectInfo }) => {
  console.log(projectInfo)
  return (
    <>
 
        <section className="project">
          <input
            type="text"
            className="project__title"
            placeholder={projectInfo.title}
          ></input>
          <div className="project__status">
            <TaskStatus placeholder="TODO" />
            <TaskStatus placeholder="DOING" />
            <TaskStatus placeholder="DONE" />
          </div>
        </section>
  
    </>
  );
};

export default Project;