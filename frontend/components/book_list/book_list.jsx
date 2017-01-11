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
    let booksSummary = booksSummaryIds.map((book, idx) => {
      return <BookListItem
        key={idx}
        book={book}
        />;
    });

    return (
      <div>
        <h1>{this.props.booksSummary.heading}</h1>
        { booksSummary }
      </div>
    );
  }
}

export default BookList;
