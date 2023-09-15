import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'List of Boards',
    path: '/ListOfBoards',
    icon: <HiIcons.HiOutlineViewBoards />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Project 1',
        path: '/ListOfBoards/Project1',
        icon: <GrIcons.GrProjects />,
      },
      {
        title: 'Project 2',
        path: '/ListOfBoards/Project2',
        icon: <GrIcons.GrProjects />,
      },
      {
        title: 'Project 3',
        path: '/ListOfBoards/Project3',
        icon: <GrIcons.GrProjects />,
      },
    ],
  },
];
