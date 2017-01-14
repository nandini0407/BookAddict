import React from 'react';
import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBookDetail } from '../../actions/book_actions';
import { addBookToBookshelf, removeBookFromBookshelf } from '../../actions/bookshelf_book_actions';
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
    addBookToBookshelf: (book, bookshelf) => dispatch(addBookToBookshelf(book, bookshelf)),
    removeBookFromBookshelf: (id, book, bookshelf) => dispatch(removeBookFromBookshelf(id, book, bookshelf))
  };
};

const BookDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetailContainer;
