import React from 'react';
import BookListItem from './book_list_item';
import InfiniteScroll from 'react-infinite-scroller';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: "",
      booksSummaryIds: [],
      hasMoreItems: true
    };
  }

  fetchDataIfNeeded() {
    if (this.state.currentUrl !== this.props.location.pathname) {
      if (this.props.params.bookshelfId) {
        this.props.fetchBooksSummary(this.props.params.bookshelfId)
          .then(() => this.updateState());
      } else if (this.props.params.readStatusId) {
        this.props.fetchBooksSummary(null, this.props.params.readStatusId)
          .then(() => this.updateState());
      } else if (this.props.params.query) {
        this.props.fetchBooksSummary(null, null, this.props.params.query)
          .then(() => this.updateState());
      } else {
        this.props.fetchBooksSummary()
          .then(() => this.updateState());
      }
    }
  }

  updateState() {
    this.state = {
      currentUrl: this.props.location.pathname,
      booksSummaryIds: [],
      hasMoreItems: true
    };
    this.loadMore();
  }

  componentDidMount() {
    this.fetchDataIfNeeded();
  }

  componentWillReceiveProps(newProps) {
    this.fetchDataIfNeeded();
  }

  loadMore() {
    let newBooksSummaryIds = [];
    let hasMoreItems = true;
    if (this.props.booksSummary.books === undefined) {
      newBooksSummaryIds = [];
      hasMoreItems = false;
    } else {
      let allBookSummaryIds = Object.keys(this.props.booksSummary.books).sort();
      for (let i = 0; i < 6; i++) {
        if (this.state.booksSummaryIds.length + i + 1 > allBookSummaryIds.length ) {
          hasMoreItems = false;
          break;
        }
        newBooksSummaryIds.push(allBookSummaryIds[this.state.booksSummaryIds.length + i]);
      }
    }
    newBooksSummaryIds = this.state.booksSummaryIds.concat(newBooksSummaryIds);
    this.setState({
      currentUrl: this.props.location.pathname,
      booksSummaryIds: newBooksSummaryIds,
      hasMoreItems: hasMoreItems
    });
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
      booksSummary = [<div key={0}></div>];
    } else {
      booksSummary = this.state.booksSummaryIds.map((id, idx) => {
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
          <InfiniteScroll
            className="infinite-grid"
            pageStart={0}
            loadMore={this.loadMore.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={<div className="loader">Loading ...</div>}
            >
            { booksSummary }
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default BookList;
