import * as ReadStatusBooksAPIUtil from '../util/read_status_books_api_util';
import { receiveBookDetail } from './book_actions';

// export const RECEIVE_READ_STATUS = "RECEIVE_READ_STATUS";

// async actions

export const addReadStatus = (bookId, readStatusId) => (dispatch) => {
  return ReadStatusBooksAPIUtil.addReadStatus(bookId, readStatusId)
    .then((bookDetail) => {
      dispatch(receiveBookDetail(bookDetail));
    });
};

// sync actions

// unused method
// export const receiveReadStatus = (readStatus) => {
//   return {
//     type: RECEIVE_READ_STATUS,
//     readStatus
//   };
// };
