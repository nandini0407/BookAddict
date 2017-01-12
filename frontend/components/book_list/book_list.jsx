import React from 'react';
import BookListItem from './book_list_item';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooksSummary();
  }

  render() {
    let booksSummaryIds = Object.keys(this.props.booksSummary.books);
    let booksSummary = booksSummaryIds.map((id, idx) => {
      return <BookListItem
        key={idx}
        book={this.props.booksSummary.books[id]}
        />;
    });

    return (
      <div className="main">
        <h1 className="heading">{this.props.booksSummary.heading}</h1>
        <div className="book-list-item">
          { booksSummary }
        </div>
      </div>
    );
  }
}

export default BookList;
