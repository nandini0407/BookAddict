import { RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelfReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      let newState = [].concat(state);
      newState.push(action.bookshelf);
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
