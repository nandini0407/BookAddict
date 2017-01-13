import React from 'react';
import BookListItem from './book_list_item';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }

  componentDidMount() {
    // debugger;
    if (this.props.params.bookshelfId) {
      this.props.fetchBooksSummary(this.props.params.bookshelfId);
    } else {
      this.props.fetchBooksSummary();
    }
  }

  componentWillReceiveProps () {
    
  }

  render() {
    // debugger;
    let booksSummary;
    if (this.props.booksSummary.books === undefined) {
      booksSummary = <div></div>;
    } else {
      let booksSummaryIds = Object.keys(this.props.booksSummary.books);
      booksSummary = booksSummaryIds.map((id, idx) => {
        return <BookListItem
          key={idx}
          book={this.props.booksSummary.books[id]}
          />;
      });
    }

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
