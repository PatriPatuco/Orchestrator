import React from "react";
import { useParams } from "react-router-dom";
import Project from "../components/Project/Project";

const ProjectDetail = ({ projects }) => {
  console.log("props de ProjectDetail", projects);
  const { id } = useParams();
  console.log("ID de useParams:", id);

  // Verificar si 'projects' está definido antes de buscar el proyecto
  if (!projects) {
    return <p>Cargando datos...</p>;
  }

  const projectId = parseInt(id, 10); // Convierte id a número base 10
  const projectFound = projects.find(
    (eachProject) => eachProject.id === projectId
  );

  /* 
  // Utiliza 'id' para buscar el proyecto correspondiente
  const projectFound = projects.find((eachProject) => eachProject.id === id); */

  console.log(projectFound);
  return (
    <div>
      {projectFound ? (
        <>
          <h2>Detalles del Proyecto {id}</h2>
          <Project project={projectFound} />
        </>
      ) : (
        <p>Proyecto no encontrado</p>
      )}
    </div>
  );
};

export default ProjectDetail;
