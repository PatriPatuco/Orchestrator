import React, { useState, useEffect } from 'react';

const ListView = (props) => {
  console.log(props.projectFound);
  return (
    <>
      <div className="project__status">
        {props.projectFound.tasks.map((task, index) => (
          <p>{task.title}</p>
        ))}
      </div>
    </>
  );
};

export default ListView;
