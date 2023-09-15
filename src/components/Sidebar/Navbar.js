import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';

// import * as HiIcons from 'react-icons/hi';
// import * as RiIcons from 'react-icons/ri';
// import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

const Navbar = ({ sidebar, setSidebar }) => {
  const showSideBar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider>
        <div className="Navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
