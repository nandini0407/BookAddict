import React from 'react';
import NavContainer from './nav_container';
import Sidebar from './sidebar';

const App = ({ children }) => {
  // debugger;
  return (
    <div className="app">
      <div className="app-nav">
        <NavContainer />
      </div>
      <div className="app-main">
        <Sidebar />
        <div className="app-children">
          { children }
        </div>
      </div>
    </div>
  );
};

export default App;
