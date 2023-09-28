import React from 'react';
import { Link } from 'react-router-dom';

const ViewOptions = (projects) => {
  // const handlelist = (ev) => {
  //   showlist(ev.target);
  // };
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--ul">
          <li>List</li>
          <li>Board</li>
          <li>Calendar</li>
          <li>View Mode</li>
        </ul>
      </nav>
    </>
  );
};

export default ViewOptions;
