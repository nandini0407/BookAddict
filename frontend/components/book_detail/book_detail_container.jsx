import React from 'react';
import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBookDetail } from '../../actions/book_actions';
import { changeBookshelves } from '../../actions/bookshelf_book_actions';
import { fetchAllBookshelves } from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookDetail: state.bookDetail,
    bookId: ownProps.bookId,
    bookshelves: state.bookshelves
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookDetail: (id) => dispatch(fetchBookDetail(id)),
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    changeBookshelves: (bookId, bookshelves) => dispatch(changeBookshelves(bookId, bookshelves))
  };
};

const BookDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetailContainer;
