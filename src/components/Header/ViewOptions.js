import React from 'react';
import { Link } from 'react-router-dom';

const ViewOptions = ({ projects, showView }) => {
  const handleView = (ev) => {
    console.log('he hecho click :', ev.target);
    showView(true);
  };
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--ul">
          <li onClick={handleView}>List</li>
          <li>Board</li>
          <li>Calendar</li>
          <li>View Mode</li>
        </ul>
      </nav>
    </>
  );
};

export default ViewOptions;
