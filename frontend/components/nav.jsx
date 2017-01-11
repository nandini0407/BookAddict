import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting/greeting_container';

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <GreetingContainer />
    </div>
  );
};

export default Nav;
