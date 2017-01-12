import React from 'react';
import BookDetailContainer from './book_detail/book_detail_container';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-detail-container">
        <BookDetailContainer
          bookId={this.props.params.bookId}
          />
      </div>
    );
  }
}

export default BookShow;
