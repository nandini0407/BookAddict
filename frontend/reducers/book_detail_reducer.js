import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';
import { PUSH_BOOKSHELF, POP_BOOKSHELF } from '../actions/bookshelf_book_actions';
import merge from 'lodash/merge';

const BookDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.bookDetail;
    case PUSH_BOOKSHELF:
      newState.bookshelves.push(action.bookshelf);
      return newState;
    case POP_BOOKSHELF:
      let idx = newState.bookshelves.indexOf(action.bookshelf);
      if (idx > -1) {
        newState.bookshelves.splice(idx, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default BookDetailReducer;
