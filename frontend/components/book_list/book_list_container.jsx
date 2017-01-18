import React from 'react';
import { connect } from 'react-redux';
import BookList from './book_list';
import { fetchBooksSummary } from '../../actions/book_actions';

const mapStateToProps = (state) => {
  return {
    booksSummary: state.booksSummary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooksSummary: (bookshelfId = null, readStatusId = null, query = null) => dispatch(fetchBooksSummary(bookshelfId, readStatusId, query))
  };
};

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
