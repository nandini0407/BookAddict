import React from 'react';
import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "signup") ? signup : login;

  return {
    formType,
    processForm: (user) => dispatch(processForm(user))
  };
};

const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(AuthForm);

export default AuthFormContainer;
