import React from 'react';
import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBookDetail } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookDetail: state.bookDetail,
    bookId: ownProps.params.bookId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookDetail: (id) => dispatch(fetchBookDetail(id))
  };
};

const BookDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetailContainer;
