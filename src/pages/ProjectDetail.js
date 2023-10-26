import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BoardProject from '../components/Project/BoardView/BoardProject';
import ListView from '../components/Project/ListView';
import CalendarView from '../components/Project/CalendarView';
import TaskDetail from '../components/Project/TaskDetail';

const ProjectDetail = ({ projects, viewProject }) => {
  const [modalOn, setModalOn] = useState(false);
  const [taskInfo, setTaskInfo] = useState(null);

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const view = searchParams.get('view') || 'default';

  // Cambia el estado del modal para abrirlo o cerrarlo y añade la info de la tarea clikeada(desde BoardTask)
  const showTaskInfo = (clickedInfo) => {
    setModalOn(!modalOn);
    setTaskInfo(clickedInfo);
  }

  console.log(taskInfo);

  // Verificar si 'projects' está definido antes de buscar el proyecto
  if (!projects) {
    return <p>Cargando datos...</p>;
  }

  const projectId = parseInt(id);
  const projectFound = projects.find(
    (eachProject) => eachProject.id === projectId
  );
  console.log(projectFound);

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
    </div>
  );
};

export default ProjectDetail;