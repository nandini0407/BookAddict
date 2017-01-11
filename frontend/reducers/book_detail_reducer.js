import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';

const BookDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.bookDetail;
    default:
      return state;
  }
};

export default BookDetailReducer;
