import React from 'react';
import BookDetailContainer from './book_detail/book_detail_container';
import ReviewsContainer from './reviews/reviews_container';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-detail-container">
        <BookDetailContainer
          className="book-detail-container"
          bookId={this.props.params.bookId}
          />
        <ReviewsContainer
          className="reviews-container"
          bookId={this.props.params.bookId}
          />
      </div>
    );
  }
}

export default BookShow;
