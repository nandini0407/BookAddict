import * as BookshelfBookAPIUtil from '../util/bookshelf_books_api_util';

// export const PUSH_BOOKSHELF = "PUSH_BOOKSHELF";
// export const POP_BOOKSHELF = "POP_BOOKSHELF";
export const ADD_BOOKSHELVES_TO_DETAIL = "ADD_BOOKSHELVES_TO_DETAIL";

// async actions

// export const addBookToBookshelf = (bookId, bookshelfId) => (dispatch) => {
//   return BookshelfBookAPIUtil.addBookToBookshelf(bookId, bookshelfId)
//     .then((book, bookshelf) => dispatch(pushBookshelf(book, bookshelf)));
// };
//
// export const removeBookFromBookshelf = (id, bookId, bookshelfId) => (dispatch) => {
//   return BookshelfBookAPIUtil.removeBookFromBookshelf(id, bookId, bookshelfId)
//     .then((bookshelf) => dispatch(popBookshelf(bookshelf)));
// };

export const changeBookshelves = (bookId, bookshelves) => (dispatch) => {
  return BookshelfBookAPIUtil.changeBookshelves(bookId, bookshelves)
    .then((bkshelves) => dispatch(addBookshelvesToDetail(bkshelves)));
};

// sync actions

// export const pushBookshelf = (bookshelf) => {
//   return {
//     type: PUSH_BOOKSHELF,
//     bookshelf
//   };
// };
//
// export const popBookshelf = (bookshelf) => {
//   return {
//     type: POP_BOOKSHELF,
//     bookshelf
//   };
// };

export const addBookshelvesToDetail = (bookshelves) => {
  return {
    type: ADD_BOOKSHELVES_TO_DETAIL,
    bookshelves
  };
};
