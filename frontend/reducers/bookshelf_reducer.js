import { RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelfReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [].concat(state);

  switch (action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      newState.push(action.bookshelf);
      return newState;
    case REMOVE_BOOKSHELF:
      let idx = newState.bookshelf.indexOf(action.bookshelf);
      if (idx > -1) {
        newState.bookshelves.splice(idx, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
