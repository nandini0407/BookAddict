import * as ReviewAPIUtil from '../util/reviews_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

// async actions

export const fetchAllReviews = (bookId) => (dispatch) => {
  return ReviewAPIUtil.fetchAllReviews(bookId)
    .then((reviews) => dispatch(receiveAllReviews(reviews)));
};

export const addReview = (review, bookId) => (dispatch) => {
  return ReviewAPIUtil.addReview(review, bookId)
    .then((rview) => dispatch(receiveReview(rview)));
};

// sync actions

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};
