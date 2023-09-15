import TaskStatus from "./TaskStatus";

const Project = () => {
    const tasks = [
      { title: "Task 1", status: "TODO" },
      { title: "Task 2", status: "DOING" },
      {title: "Task 3", status: "DOING"},
      { title: "Task 4", status: "DONE" },
      { title: "Task 5", status: "DONE" },
      { title: "Task 6", status: "DONE" },
    ];

  return (
    <section>
      <h2>Title Project 1</h2>
      <TaskStatus
        status="TODO (1)"
        tasks={tasks.filter((task) => task.status === "TODO")}
      />
      <TaskStatus
        status="DOING (2)"
        tasks={tasks.filter((task) => task.status === "DOING")}
      />
      <TaskStatus
        status="DONE (3)"
        tasks={tasks.filter((task) => task.status === "DONE")}
      />

    </section>
  );
};

export default Project;
