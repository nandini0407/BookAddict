import React from 'react';
import Nav from './nav';
import Sidebar from './sidebar';

const App = ({ children }) => {
  return (
    <div>
      <Nav />
      <Sidebar />
      { children }
    </div>
  );
};

export default App;
