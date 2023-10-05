import React from 'react';
import { useParams } from 'react-router-dom';
import Project from '../components/Project/Project';

const ProjectDetail = ({ projects, viewProject }) => {
  // dynamic routes (projects id)
  console.log('props de ProjectDetail', projects);
  const { id } = useParams();

  // Verificar si 'projects' está definido antes de buscar el proyecto
  if (!projects) {
    return <p>Cargando datos...</p>;
  }

  const projectId = parseInt(id);
  const projectFound = projects.find(
    (eachProject) => eachProject.id === projectId
  );

  console.log('---->', projectFound);
  return (
    <div>
      <Project projectFound={projectFound} viewProject={viewProject} />
      {/*  {projectFound ? (
      <Project projectFound={projectFound} />
      {/*  {projectFound ? (
        <>
          <Project project={projectFound} />
        </>
      ) : (
        <p>Proyecto no encontrado</p>
      )} */}
    </div>
  );
};

export default ProjectDetail;
