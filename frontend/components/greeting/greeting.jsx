import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Hello {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Greeting;
