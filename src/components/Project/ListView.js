import React, { useState, useEffect } from 'react';
import '../../styles/components/ListView.scss';

const ListView = (project) => {
  console.log(project.projectFound.status);
  const taskTotal = project.projectFound.status.map((eachstatus) =>
    eachstatus.tasks.map((eachtask) => eachtask.id)
  );
  const conteo = taskTotal.reduce((total, tasks) => total + tasks.length, 0);

  console.log(conteo);

  return (
    <div className="container">
      <h2 className="list-title">{project.projectFound.title}</h2>
      <h3>Tasks</h3>
      <h3>{conteo}</h3>

      {project.projectFound.status.map((eachstatus) => {
        return (
          <>
            {eachstatus.tasks.map((eachtask) => (
              <div className="task">
                <p key={eachtask.id} className="task__title">
                  {eachtask.title}
                </p>
                <p className="task__name">{eachstatus.name}</p>
              </div>
            ))}
          </>
        );
      })}
    </div>
  );
};
export default ListView;

// {
//   props.projectFound.status.map((eachstatus) => {
//     return (
//       <div key={eachstatus.id} className="task__container">
//         <p className="task__container--title">{eachstatus.name}</p>
//         {eachstatus.tasks.map((eachtask) => (
//           <p key={eachtask.id} className="task__container--task">
//             {eachtask.title}
//           </p>
//         ))}
//       </div>
//     );
//   });
// }

// const statusA = project.projectFound.status;

// const taskTitle = statusA.map((eachstatus) => {
//   const match = statusA.find((element) => element.id === eachstatus.id);

//   console.log(match);

//   return eachstatus.tasks.map((eachtask) => eachtask.title);
// });
// console.log(taskTitle);
