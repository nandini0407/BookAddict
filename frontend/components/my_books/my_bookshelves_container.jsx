import React from 'react';
import { connect } from 'react-redux';
import MyBookshelves from './my_bookshelves';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const MyBookshelvesContainer = connect(mapStateToProps, mapDispatchToProps)(MyBookshelves);

export default MyBookshelvesContainer;
