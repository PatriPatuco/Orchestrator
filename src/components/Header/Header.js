import React from 'react';

import ViewOptions from './ViewOptions';

const Header = (projects) => {
  return (
    <div className="header">
      <ViewOptions projects={projects} />
    </div>
  );
};

export default Header;
