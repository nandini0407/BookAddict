import React from 'react';
import Logo from './logo';

const Splash = ({ children }) => {
  return (
    <div>
      <div className="splash-container">
        <Logo />
        <div className="splash-items">
          <h1 className="splash-text">Find the best stories</h1>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Splash;
