import * as BookAPIUtil from '../util/books_api_util';

export const RECEIVE_BOOKS_SUMMARY = "RECEIVE_BOOKS_SUMMARY";
export const RECEIVE_BOOK_DETAIL = "RECEIVE_BOOK_DETAIL";

// async actions

export const fetchBooksSummary = () => (dispatch) => {
  return BookAPIUtil.fetchBooksSummary()
    .then((booksSummary) => {
      dispatch(receiveBooksSummary(booksSummary));
      return booksSummary;
    });
};

export const fetchBookDetail = (id) => (dispatch) => {
  return BookAPIUtil.fetchBookDetail(id)
  .then((bookDetail) => dispatch(receiveBookDetail(bookDetail)));
};

// sync actions

export const receiveBooksSummary = (booksSummary) => {
  return {
    type: RECEIVE_BOOKS_SUMMARY,
    booksSummary
  };
};

export const receiveBookDetail = (bookDetail) => {
  return {
    type: RECEIVE_BOOK_DETAIL,
    bookDetail
  };
};
