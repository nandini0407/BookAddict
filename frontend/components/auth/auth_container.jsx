import React from 'react';
import { connect } from 'react-redux';
import Auth from './auth';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

const AuthContainer = connect(null, mapDispatchToProps)(Auth);

export default AuthContainer;
