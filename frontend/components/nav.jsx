import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';
import SearchContainer from './search/search_container';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <Link
            to='/user/books'
            ><Logo /></Link>
          <Link
            to='/user/books'
            className="nav-all-books"
            ><h2>All Books</h2><
            /Link>
        </div>
        <SearchContainer
          className="search-container"
          />
        <GreetingContainer />
      </div>
    );
  }
}

export default Nav;
