import * as ReadStatusBooksAPIUtil from '../util/read_status_books_api_util';

export const RECEIVE_READ_STATUS = "RECEIVE_READ_STATUS";

// async actions

export const addReadStatus = (bookId, readStatusId) => (dispatch) => {
  return ReadStatusBooksAPIUtil.addReadStatus(bookId, readStatusId)
    .then((readStatus) => dispatch(receiveReadStatus(readStatus)));
};

// sync actions

export const receiveReadStatus = (readStatus) => {
  return {
    type: RECEIVE_READ_STATUS,
    readStatus
  };
};
