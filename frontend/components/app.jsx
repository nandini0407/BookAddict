import React from 'react';
import Nav from './nav';
import Sidebar from './sidebar';

const App = ({ children }) => {
  return (
    <div className="app">
      <div className="app-nav">
        <Nav />
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
