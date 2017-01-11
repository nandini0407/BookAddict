import React from 'react';
import { hashHistory } from 'react-router';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSignUp() {
    hashHistory.push('/signup');
  }

  renderLogin() {
    hashHistory.push('/login');
  }

  render() {
    return (
      <div className="auth-buttons">
        <div className="top-auth-buttons">
          <button className="button signup-button" onClick={this.renderSignUp}>Sign Up</button>
          <button className="button login-button" onClick={this.renderLogin}>Login</button>
        </div>
        <button className="button guest-button">Guest</button>
      </div>
    );
  }
}

export default Auth;
