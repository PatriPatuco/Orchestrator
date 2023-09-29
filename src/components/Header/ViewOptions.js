import React from 'react';
import { Link } from 'react-router-dom';

const ViewOptions = (projects) => {
  const handlelist = (ev) => {
    console.log('he hecho click :', ev.target);
  };
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--ul">
          <li onClick={handlelist}>List</li>
          <li>Board</li>
          <li>Calendar</li>
          <li>View Mode</li>
        </ul>
      </nav>
    </>
  );
};

export default ViewOptions;
