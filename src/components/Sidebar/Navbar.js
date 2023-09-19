import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

const Navbar = ({ tasks }) => {
  const [sidebar, setSidebar] = useState(false);
  const [taskList, setTaskList] = useState(true);
  const showSideBar = () => setSidebar(!sidebar);

  const showTaskList = () => setTaskList(!taskList);

  return (
    <>
      <div className="sidebar active">
        <h1 className="sidebar__logo">Orchestrator</h1>
        <div className="sidebar__navbar">
          <Link to="#" className="sidebar__navbar--menu-bars">
            <MdIcons.MdOutlineKeyboardDoubleArrowLeft onClick={showSideBar} />
          </Link>
        </div>
        <nav
          className={
            sidebar ? 'sidebar__nav--menu active' : 'sidebar__nav--menu'
          }
        >
          <ul className="sidebar__nav--menu--items">
            <li className="sidebar__nav--menu--items--toggle">
              List of Tasks
              <span className="navbar__menu--bars">
                <Link to="#">
                  <MdIcons.MdOutlineKeyboardDoubleArrowLeft
                    onClick={showSideBar}
                  />
                </Link>
              </span>
            </li>
            <li>
              <span className="navbar__menu--bars">
                <Link to="#">
                  <MdIcons.MdOutlineKeyboardArrowDown onClick={showTaskList} />
                </Link>
              </span>
            </li>
            {taskList &&
              tasks.map((item, index) => {
                return (
                  <li key={index} className="nav__menu--items--tasks">
                    {item.title}
                    {tasks.l}
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

//  return (
//    <>
//      <div className="Navbar">
//        <Link to="#" className="menu-bar">
//          <FaIcons.FaBars />
//        </Link>
//      </div>
//    </>
//  );
