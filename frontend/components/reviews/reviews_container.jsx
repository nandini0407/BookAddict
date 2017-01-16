import { connect } from 'react-redux';
import Reviews from './reviews';
import { fetchAllReviews, addReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    bookId: ownProps.bookId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllReviews: (bookId) => dispatch(fetchAllReviews(bookId)),
    addReview: (review, bookId) => dispatch(addReview(review, bookId))
  };
};

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;
