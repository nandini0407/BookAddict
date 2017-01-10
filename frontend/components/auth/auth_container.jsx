import React from 'react';
import { connect } from 'react-redux';
import Auth from './auth';

const mapStateToProps = (state) => {
  return {
    currentUser: null,
    errors: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
