import TaskStatus from "./TaskStatus";

const Project = ({ taskData }) => {
  return (
    <section>
      <h2>Title Project 1</h2>
      <TaskStatus
        status="TODO"
        tasks={taskData.tasks.filter((task) => task.status === "TODO")}
      />
      <TaskStatus
        status="DOING"
        tasks={taskData.filter((task) => task.status === "DOING")}
      />
      <TaskStatus
        status="DONE"
        tasks={taskData.filter((task) => task.status === "DONE")}
      />
    </section>
  );
};

export default Project;
