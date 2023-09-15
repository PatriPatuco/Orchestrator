//styles
import '../styles/App.scss';
//components
import Navbar from "./Sidebar/Navbar";
import Project from './Project/Project';
import React, { useState } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Project/>
  )
}

export default App;
