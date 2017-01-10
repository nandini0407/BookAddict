import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// async actions

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
    .then((usr) => dispatch(receiveCurrentUser(usr)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    .then((usr) => dispatch(receiveCurrentUser(usr)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then(() => dispatch(receiveLogoutSuccess()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

// sync actions

export const receiveCurrentUser = (user) => {
  debugger;
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveLogoutSuccess = () => {
  return {
    type: RECEIVE_LOGOUT_SUCCESS
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
