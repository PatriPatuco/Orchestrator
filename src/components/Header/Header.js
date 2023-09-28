import React from 'react';

import ViewOptions from './ViewOptions';

const Header = (projects) => {
  return (
    <div className="Header">
      <ViewOptions projects={projects} />
    </div>
  );
};

export default Header;

//  cuando se haga click
