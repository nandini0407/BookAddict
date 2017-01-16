import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      let newState = merge({}, state);
      newState[action.review.id] = action.review;
      return newState;
    default:
      return state;
  }
};

export default ReviewReducer;
