import React from 'react';
import { Router, hashHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import Splash from './splash';
import AuthContainer from './auth/auth_container';
import AuthFormContainer from './auth/auth_form_container';
import BookListContainer from './book_list/book_list_container';
import BookShow from './book_show';

const Root = ({ store }) => {
  // debugger;

  const _redirectIfLoggedIn = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/user");
    }
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
        <Route path="/" component={ Splash } onEnter={ _redirectIfLoggedIn }>
          <IndexRedirect to="/welcome" />
          <Route path="/welcome" component={ AuthContainer } />
          <Route path="/signup" component={ AuthFormContainer } />
          <Route path="/login" component={ AuthFormContainer } />
        </Route>
        <Route path="/user" component={ App } onEnter={ _ensureLoggedIn }>
          <IndexRedirect to="/user/books" />
          <Route path="/user/books" component={ BookListContainer } />
          <Route path="/user/books/:bookId" component={ BookShow } />
          <Route path="/user/bookshelves/:bookshelfId" component={ BookListContainer } />
          <Route path="/user/readstatus/:readStatusId" component={ BookListContainer } />
          <Route path="/user/search/:query" component={ BookListContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
