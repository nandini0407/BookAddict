import React from 'react';
import Logo from './logo';

const Splash = ({ children }) => {
  return (
    <div>
      <div className="splash-container">
        <Logo />
        <img className="splash-image" src="images/splash_image.jpg" alt="https://unsplash.com/photos/UoqAR2pOxMo"/>
        <div className="splash-items">
          <h1 className="splash-text">Splash Text Here</h1>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Splash;
