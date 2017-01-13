import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchBooksSummary = this.props.fetchBooksSummary.bind(this);
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <Logo />
          <Link
            to='/user/books'
            className="nav-all-books"
            onClick={this.props.fetchBooksSummary}
            ><h2>All Books</h2><
            /Link>
        </div>
        <GreetingContainer />
      </div>
    );
  }
}

export default Nav;
