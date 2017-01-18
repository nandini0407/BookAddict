import React from 'react';
import BookListItem from './book_list_item';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUrl: "" };
    debugger;
  }

  fetchDataIfNeeded() {
    if (this.state.currentUrl !== this.props.location.pathname) {
      if (this.props.params.bookshelfId) {
        this.props.fetchBooksSummary(this.props.params.bookshelfId)
          .then(() => this.updateState());
      } else if (this.props.params.readStatusId) {
        this.props.fetchBooksSummary(null, this.props.params.readStatusId)
          .then(() => this.updateState());
      } else {
        this.props.fetchBooksSummary()
          .then(() => this.updateState());
      }
    }
  }

  updateState() {
    this.state = { currentUrl: this.props.location.pathname}  ;
  }

  componentDidMount() {
    this.fetchDataIfNeeded();
  }

  componentWillReceiveProps(newProps) {
    this.fetchDataIfNeeded();
  }

  render() {
    if (this.state.currentUrl !== this.props.location.pathname) {
      // this is to prevent rendering data in the old redux state
      return (
        <div className="main"></div>
      );
    }

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
