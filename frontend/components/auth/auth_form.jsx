import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter, hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirectToAlternate = this.redirectToAlternate.bind(this);
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
        this.redirect();
    } );
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

  redirect() {
    this.props.router.push('/user');
  }

  redirectToAlternate() {
    if (this.props.formType === "signup") {
      return <Link to='/login' className="alternate-auth-text" onClick={this.props.receiveClearErrors}>Login</Link>;
    } else {
      return <Link to='/signup' className="alternate-auth-text" onClick={this.props.receiveClearErrors}>Sign Up</Link>;
    }
  }

  render() {
    let submitText = (this.props.formType === "signup") ? "Sign Up" : "Login";
    let alternateAuth = (this.props.formType === "signup") ? "Login" : "Sign Up";
    return (
      <div>
        <p className="auth-text">Please {submitText} or {this.redirectToAlternate()}</p>
        <div className="form">
          <div className="errors">{this.renderErrors()}</div>
          <form className="authform" onSubmit={this.handleSubmit}>
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
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
