import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const ViewOptions = ({ showView }) => {
  const [, setSearchParams] = useSearchParams();

  const handleView = (view) => {
    setSearchParams({ view });
  };

  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--ul">
          <li onClick={() => handleView('list')}>List</li>
          <li onClick={() => handleView('board')}>Board</li>
          <li onClick={() => handleView('calendar')}>Calendar</li>
          <li onClick={() => handleView('viewMode')}>View Mode</li>
        </ul>
      </nav>
    </>
  );
};

export default ViewOptions;
