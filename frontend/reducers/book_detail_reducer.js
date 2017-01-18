import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';
import { ADD_BOOKSHELVES_TO_DETAIL } from '../actions/bookshelf_book_actions';
import merge from 'lodash/merge';

const BookDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.bookDetail;
    case ADD_BOOKSHELVES_TO_DETAIL:
      delete newState.bookshelves;
      newState['bookshelves'] = action.bookshelves;
      return newState;
    default:
      return state;
  }
};

export default BookDetailReducer;
