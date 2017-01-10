import React from 'react';
import Logo from './logo';

const Splash = ({ children }) => {
  return (
    <div>
      Splash Text Here
      <Logo />
      { children }
    </div>
  );
};

export default Splash;
