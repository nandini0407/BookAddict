import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { fetchBooksSummary } from '../actions/book_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooksSummary: () => {
      // debugger;
      dispatch(fetchBooksSummary());
    }
  };
};

const NavContainer = connect(null, mapDispatchToProps)(Nav);

export default NavContainer;
