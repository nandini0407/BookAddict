import React from 'react';
import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBookDetail } from '../../actions/book_actions';
import { changeBookshelves } from '../../actions/bookshelf_book_actions';
import { fetchAllBookshelves } from '../../actions/bookshelf_actions';
import { addReadStatus } from '../../actions/read_status_book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookDetail: state.bookDetail,
    bookId: ownProps.bookId,
    bookshelves: state.bookshelves,
    readStatuses: state.readStatuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookDetail: (id) => dispatch(fetchBookDetail(id)),
    fetchAllBookshelves: () => dispatch(fetchAllBookshelves()),
    changeBookshelves: (bookId, bookshelfIds) => dispatch(changeBookshelves(bookId, bookshelfIds)),
    addReadStatus: (bookId, readStatusId) => dispatch(addReadStatus(bookId, readStatusId))
  };
};

const BookDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetailContainer;
