import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import Splash from './splash';
import AuthContainer from './auth/auth_container';
import AuthFormContainer from './auth/auth_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {

  };

  const _ensureLoggedIn = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/welcome");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Splash } onEnter={ _ensureLoggedIn } >
          <Route path="/welcome" component={ AuthContainer } />
          <Route path="/signup" component={ AuthFormContainer } />
        </Route>
        <Route path="/user" component={ App } />
      </Router>
    </Provider>
  );
};

export default Root;
