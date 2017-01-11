import React from 'react';
import { hashHistory } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => hashHistory.push('/login'));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="greeting">
          <h2 className="greet-user">Hello {this.props.currentUser.username}</h2>
          <button className="logout-button" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Greeting;
