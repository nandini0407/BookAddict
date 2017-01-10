import React from 'react';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Sign Up</button>
        <button>Login</button>
        <button>Guest</button>
      </div>
    );
  }
}

export default Auth;
