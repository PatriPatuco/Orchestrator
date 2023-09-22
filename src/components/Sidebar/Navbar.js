import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import Project from '../Project/Project';

const Navbar = ({ projects }) => {
  const [sidebar, setSidebar] = useState(false);
  const [taskList, setTaskList] = useState(true);
  const showSideBar = () => setSidebar(!sidebar);
  const showTaskList = () => setTaskList(!taskList);

  return (
    <>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <h2 className="sidebar__h2">
          <Link to="/">Orchestrator</Link>
          <span>
            <Link
              to="#"
              className={
                sidebar ? 'sidebar__h3--span active' : 'sidebar__h3--span'
              }
            >
              <MdIcons.MdOutlineKeyboardDoubleArrowRight
                onClick={showSideBar}
              />
            </Link>
          </span>
        </h2>
        <h3 className="sidebar__h3">
          List of Tasks {projects.length > 0 ? '(' + projects.length + ')' : ''}
        </h3>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav--ulp">
            <span>
              <Link to="#">
                <MdIcons.MdOutlineKeyboardArrowDown onClick={showTaskList} />
              </Link>
            </span>
            <li className="sidebar__nav--ulp--l"></li>
            {taskList && projects
              ? projects.map((item, index) => {
                  return (
                    <li key={index} className="sidebar__nav--ulp--l">
                      <Link to="/Project/id">{item.projectTitle}</Link>
                    </li>
                  );
                })
              : ''}
          </ul>
        </nav>
        <button classsName="sidebar__button">
          <Link to="/new">add new project</Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
