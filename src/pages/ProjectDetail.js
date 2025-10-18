<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> projectSection
import { useParams, useSearchParams } from 'react-router-dom';
import BoardProject from '../components/Project/BoardView/BoardProject';
import ListView from '../components/Project/ListView';
import CalendarView from '../components/Project/CalendarView';
<<<<<<< HEAD

const ProjectDetail = ({ projects, viewProject }) => {
  // dynamic routes (projects id)
  console.log('props de ProjectDetail', projects);
=======
import TaskDetail from '../components/Project/TaskDetail';

const ProjectDetail = ({ projects, viewProject }) => {
  const [modalOn, setModalOn] = useState(false);
  const [taskInfo, setTaskInfo] = useState(null);

>>>>>>> projectSection
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const view = searchParams.get('view') || 'default';

<<<<<<< HEAD
=======
  // Cambia el estado del modal para abrirlo o cerrarlo y añade la info de la tarea clikeada(desde BoardTask)
  const showTaskInfo = (clickedInfo) => {
    setModalOn(!modalOn);
    setTaskInfo(clickedInfo);
  }

  console.log(taskInfo);

>>>>>>> projectSection
  // Verificar si 'projects' está definido antes de buscar el proyecto
  if (!projects) {
    return <p>Cargando datos...</p>;
  }

  const projectId = parseInt(id);
  const projectFound = projects.find(
    (eachProject) => eachProject.id === projectId
  );
  console.log(projectFound);

<<<<<<< HEAD
  return (
    <div className="project-detail">
      {view === 'list' ? (
        <ListView projectFound={projectFound} />
      ) : view === 'board' ? (
        <BoardProject projectFound={projectFound} viewProject={viewProject} />
      ) : view === 'calendar' ? (
        <CalendarView project={projectFound} viewProject={viewProject} />
      ) : (
        <BoardProject projectFound={projectFound} />
      )}
=======
    const renderTaskDetail = () => {
      if (modalOn === true) {
        return (
          <TaskDetail showTaskInfo={showTaskInfo} task={taskInfo} />
        );
      }
    };

  return (
    <div>
      {view === "list" ? (
        <ListView projectFound={projectFound} viewProject={viewProject} />
      ) : view === "board" ? (
        <BoardProject
          projectFound={projectFound}
          viewProject={viewProject}
          showTaskInfo={showTaskInfo}
        />
      ) : view === "calendar" ? (
        <CalendarView project={projectFound} viewProject={viewProject} />
      ) : (
        <BoardProject projectFound={projectFound} showTaskInfo={showTaskInfo} />
      )}

      {renderTaskDetail()}
>>>>>>> projectSection
    </div>
  );
};

<<<<<<< HEAD
export default ProjectDetail;

// const projectDetailContent =
//   view === 'list' ? (
//     <ListView project={projectFound} viewProject={viewProject} />
//   ) : view === 'board' ? (
//     <Project projectFound={projectFound} viewProject={viewProject} />
//   ) : view === 'calendar' ? (
//     <CalendarView project={projectFound} viewProject={viewProject} />
//   ) : (
//     <Project projectFound={projectFound} />
//   );
=======
export default ProjectDetail;
>>>>>>> projectSection
