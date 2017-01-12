import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Logo />
        <Link to='/user' className="nav-all-books"><h2>All Books</h2></Link>
      </div>
      <GreetingContainer />
    </div>
  );
};

export default Nav;
