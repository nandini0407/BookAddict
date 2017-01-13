import * as BookshelfBookAPIUtil from '../util/bookshelf_books_api_util';

export const PUSH_BOOKSHELF = "PUSH_BOOKSHELF";
export const POP_BOOKSHELF = "POP_BOOKSHELF";

// async actions

export const addBookToBookshelf = (bookId, bookshelfId) => (dispatch) => {
  return BookshelfBookAPIUtil.addBookToBookshelf(bookId, bookshelfId)
    .then((book, bookshelf) => dispatch(pushBookshelf(book, bookshelf)));
};

export const removeBookFromBookshelf = (id, bookId, bookshelfId) => (dispatch) => {
  return BookshelfBookAPIUtil.removeBookFromBookshelf(id, bookId, bookshelfId)
    .then((bookshelf) => dispatch(popBookshelf(bookshelf)));
};

// sync actions

export const pushBookshelf = (book, bookshelf) => {
  return {
    type: PUSH_BOOKSHELF,
    book,
    bookshelf
  };
};

export const popBookshelf = (book, bookshelf) => {
  return {
    type: POP_BOOKSHELF,
    book,
    bookshelf
  };
};
