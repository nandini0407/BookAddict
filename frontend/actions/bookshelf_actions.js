import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

// async actions

export const fetchAllBookshelves = () => (dispatch) => {
  return BookshelfAPIUtil.fetchAllBookshelves()
    .then((bookshelves) => dispatch(receiveAllBookshelves(bookshelves)));
};

export const addBookShelf = (bookshelf) => (dispatch) => {
  return BookshelfAPIUtil.addBookShelf(bookshelf)
    .then((bkshelf) => dispatch(receiveBookshelf(bkshelf)));
};

export const deleteBookshelf = (id) => (dispatch) => {
  return BookshelfAPIUtil.deleteBookshelf(id)
    .then((bookshelf) => dispatch(removeBookshelf(bookshelf)));
};

// sync actions

export const receiveAllBookshelves = (bookshelves) => {
  return {
    type: RECEIVE_ALL_BOOKSHELVES,
    bookshelves
  };
};

export const receiveBookshelf = (bookshelf) => {
  return {
    type: RECEIVE_BOOKSHELF,
    bookshelf
  };
};

export const removeBookshelf = (bookshelf) => {
  return {
    type: REMOVE_BOOKSHELF,
    bookshelf
  };
};
