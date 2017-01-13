import React from 'react';
import { connect } from 'react-redux';
import MyBookshelves from './my_bookshelves';
import { fetchBooksSummary } from '../../actions/book_actions';
import { fetchAllBookshelves, addBookShelf } from '../../actions/bookshelf_actions';

const mapStateToProps = (state) => {
  return {
    bookshelves: state.bookshelves
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    fetchBooksSummary: (bookshelfId = null) => dispatch(fetchBooksSummary(bookshelfId)),
    addBookShelf: (bookshelf) => dispatch(addBookShelf(bookshelf))
  };
};

const MyBookshelvesContainer = connect(mapStateToProps, mapDispatchToProps)(MyBookshelves);

export default MyBookshelvesContainer;
