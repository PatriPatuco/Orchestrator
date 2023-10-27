import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BoardProject from '../components/Project/BoardView/BoardProject';
import ListView from '../components/Project/ListView';
import CalendarView from '../components/Project/CalendarView';

const ProjectDetail = ({ projects, viewProject }) => {
  // dynamic routes (projects id)
  console.log('props de ProjectDetail', projects);
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const view = searchParams.get('view') || 'default';

  // Verificar si 'projects' está definido antes de buscar el proyecto
  if (!projects) {
    return <p>Cargando datos...</p>;
  }

  const projectId = parseInt(id);
  const projectFound = projects.find(
    (eachProject) => eachProject.id === projectId
  );
  console.log(projectFound);

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
    </div>
  );
};

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
