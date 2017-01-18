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
      let idxs = Object.keys(newState);
      for (let i = 0; i < idxs.length; i++) {
        let idx = idxs[i];
        if (newState[idx].name === action.bookshelf.name) {
          delete newState[idx];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
