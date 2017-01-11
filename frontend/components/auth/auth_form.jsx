import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.setState({
          username: "",
          password: ""
        });
      });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    const errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });
    return (
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    let submitText = (this.props.formType === "signup") ? "Sign Up" : "Login";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="authform">
            <input
              className="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}/>
            <input
              className="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}/>
            <input
              className="button submit-button"
              type="submit"
              value={submitText} />
          </div>
        </form>
        <div className="errors">{this.renderErrors()}</div>
      </div>
    );
  }
}

export default AuthForm;
