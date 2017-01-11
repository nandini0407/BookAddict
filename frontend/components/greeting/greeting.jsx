import React from 'react';
import { withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.router.push('/login'));
  }

  render() {
    return (
      <div className="greeting">
        <h2 className="greet-user">Hello {this.props.currentUser.username}</h2>
        <button className="logout-button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Greeting;
