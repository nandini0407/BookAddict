import * as BookshelfBookAPIUtil from '../util/bookshelf_books_api_util';

export const ADD_BOOKSHELVES_TO_DETAIL = "ADD_BOOKSHELVES_TO_DETAIL";

// async actions

export const changeBookshelves = (bookId, bookshelfIds) => (dispatch) => {
  return BookshelfBookAPIUtil.changeBookshelves(bookId, bookshelfIds)
    .then((bkshelves) => dispatch(addBookshelvesToDetail(bkshelves)));
};

// sync actions

export const addBookshelvesToDetail = (bookshelves) => {
  return {
    type: ADD_BOOKSHELVES_TO_DETAIL,
    bookshelves
  };
};
