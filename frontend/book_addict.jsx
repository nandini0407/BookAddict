import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

// TODO just for testing
window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // TODO just for testing
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
