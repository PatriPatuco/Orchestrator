import React from 'react';

import ViewOptions from './ViewOptions';

const Header = ({ showView, projects }) => {
  return (
    <div className="header">
      <ViewOptions projects={projects} showView={showView} />
    </div>
  );
};

export default Header;
