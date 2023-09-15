import '../styles/App.scss';
import React, { useState } from 'react';
import Navbar from './Sidebar/Navbar';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Routes>
      <Route
        path="/Navbar"
        element={<Navbar sidebar={sidebar} setSidebar={setSidebar} />}
      />
    </Routes>
  );
}

export default App;
