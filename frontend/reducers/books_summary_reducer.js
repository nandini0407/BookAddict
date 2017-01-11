import { RECEIVE_BOOKS_SUMMARY } from '../actions/book_actions';

const _defaultState = {
  books: [],
  heading: ""
};

const BooksSummaryReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKS_SUMMARY:
      return action.booksSummary;
    default:
      return state;
  }
};

export default BooksSummaryReducer;
