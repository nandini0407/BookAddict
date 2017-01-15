import * as BookshelfBookAPIUtil from '../util/bookshelf_books_api_util';

export const ADD_BOOKSHELVES_TO_DETAIL = "ADD_BOOKSHELVES_TO_DETAIL";

// async actions

export const changeBookshelves = (bookId, bookshelves) => (dispatch) => {
  return BookshelfBookAPIUtil.changeBookshelves(bookId, bookshelves)
    .then((bkshelves) => dispatch(addBookshelvesToDetail(bkshelves)));
};

// sync actions

export const addBookshelvesToDetail = (bookshelves) => {
  return {
    type: ADD_BOOKSHELVES_TO_DETAIL,
    bookshelves
  };
};
