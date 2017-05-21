import React from 'react';
import Logo from './logo';
import { Link } from 'react-router';

const Splash = ({ children }) => {
  return (
    <div>
      <div className="splash-container">
        <Link
          to="/welcome"
          ><Logo />
        </Link>
        <div className="splash-items">
          <h1 className="splash-text">Find the best stories</h1>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Splash;
