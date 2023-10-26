import BoardStatus from './BoardStatus';
import '../../../styles/components/BoardView.scss'

const BoardProject = ({ projectFound, viewProject, showTaskInfo }) => {
  return (
    <>
      <section className="project">
        <input
          type="text"
          className="project__title"
          placeholder={projectFound.title}
        ></input>
        <div className="project__status">
          {/* Mapear los status del proyecto */}
          {projectFound.status.map((statusItem, index) => (
            <BoardStatus
              key={index}
              item={statusItem}
              viewProject={viewProject}
              showTaskInfo={showTaskInfo}
            />
          ))}
        </div>
      </section>
      ;
    </>
  );
};

export default BoardProject;

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
