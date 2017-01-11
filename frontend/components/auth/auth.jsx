import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  renderSignUp() {
    hashHistory.push('/signup');
  }

  renderLogin() {
    hashHistory.push('/login');
  }

  loginGuest() {
    let guest = { username: 'guest', password: 'guest123' };
    this.props.login(guest)
      .then(() => this.props.router.push('/user'));
  }

  render() {
    return (
      <div className="auth-buttons">
        <div className="top-auth-buttons">
          <button className="button signup-button" onClick={this.renderSignUp}>Sign Up</button>
          <button className="button login-button" onClick={this.renderLogin}>Login</button>
        </div>
        <button className="button guest-button" onClick={this.loginGuest}>Guest</button>
      </div>
    );
  }
}

export default Auth;
