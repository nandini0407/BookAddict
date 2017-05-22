import * as BookshelfBookAPIUtil from '../util/bookshelf_books_api_util';
import { receiveBookDetail } from './book_actions';

export const ADD_BOOKSHELVES_TO_DETAIL = "ADD_BOOKSHELVES_TO_DETAIL";

// async actions

export const changeBookshelves = (bookId, bookshelfIds) => (dispatch) => {
  return BookshelfBookAPIUtil.changeBookshelves(bookId, bookshelfIds)
    .then((bookDetail) => {
      dispatch(receiveBookDetail(bookDetail));
    });
};

// sync actions

// export const addBookshelvesToDetail = (bookDetail) => {
//   return {
//     type: ADD_BOOKSHELVES_TO_DETAIL,
//     bookDetail
//   };
// };
