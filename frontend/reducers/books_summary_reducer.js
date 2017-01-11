import { RECEIVE_BOOKS_SUMMARY } from '../actions/book_actions';

const BooksSummaryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKS_SUMMARY:
      console.log(action.booksSummary);
      return action.booksSummary;
    default:
      return state;
  }
};

export default BooksSummaryReducer;
