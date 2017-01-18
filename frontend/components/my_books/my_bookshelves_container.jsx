import React from 'react';
import { connect } from 'react-redux';
import MyBookshelves from './my_bookshelves';
import { fetchAllBookshelves, addBookShelf, deleteBookshelf } from '../../actions/bookshelf_actions';

const mapStateToProps = (state) => {
  return {
    bookshelves: state.bookshelves
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    addBookShelf: (bookshelf) => dispatch(addBookShelf(bookshelf)),
    deleteBookshelf: (id) => dispatch(deleteBookshelf(id))
  };
};

const MyBookshelvesContainer = connect(mapStateToProps, mapDispatchToProps)(MyBookshelves);

export default MyBookshelvesContainer;
