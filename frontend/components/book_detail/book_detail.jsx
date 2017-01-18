import React from 'react';
import Select from 'react-select';
import Rating from 'react-rating';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookshelves: [], readStatus: {} };

    this.handleShelfChange = this.handleShelfChange.bind(this);
    this.handleReadStatusChange = this.handleReadStatusChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookDetail(this.props.bookId)
      .then(() => {
        this.setNewBookshelfState();
        this.setNewReadStatus();
      });
    this.props.fetchAllBookshelves();
  }

  setNewBookshelfState() {
    let bookshelves = this.props.bookDetail.bookshelves.map((shelf) => {
      return { id: shelf.id, label: shelf.name, value: shelf.name };
    });
    this.setState({ bookshelves: bookshelves });
  }

  setNewReadStatus() {
    let readStatus = this.props.bookDetail.readStatus;
    if (readStatus === undefined) {
      this.setState({ readStatus: { id: "", value: "", label: "" }});
    } else {
      this.setState({ readStatus: { id: readStatus.id, value: readStatus.name, label: readStatus.name }});
    }
  }

  handleShelfChange(val) {
    this.setState({ bookshelves: val });
    let bookshelfIds = Object.keys(val).map((idx) => {
      return val[idx].id;
    });
    if (bookshelfIds.length === 0) {
      bookshelfIds = [""];
    }
    this.props.changeBookshelves(this.props.bookId, bookshelfIds);
  }

  handleReadStatusChange(val) {
    this.setState({ readStatus: val });
    let readStatusId;
    if (val) {
      readStatusId = val.id;
    } else {
      readStatusId = "";
    }
    this.props.addReadStatus(this.props.bookId, readStatusId);
  }

  render() {
    let book = this.props.bookDetail;
    let bookshelves = this.props.bookshelves.map((bookshelf) => {
      return {
        value: bookshelf.name, label: bookshelf.name, id: bookshelf.id
      };
    });
    let readStatuses = this.props.readStatuses.map((status) => {
      return {
        value: status.name, label: status.name, id: status.id
      };
    });

    const fullIcon = <img
      className="icon"
      src="https://res.cloudinary.com/dt72mzjpx/image/upload/v1484724953/full_heart_hqrbof.png"
      width="17"
      height="17"
      />;
    const emptyIcon = <img
      className="icon"
      src="https://res.cloudinary.com/dt72mzjpx/image/upload/v1484724953/empty_heart_rmxig8.png"
      width="17"
      height="17"
      />;

    return (
      <div className="book-detail">
        <section className="book-detail-left">
          <div className="cover-shopping">
            <img className="book-cover" src={ book.image_url } />
            <div className="book-shopping">
              <a className="shopping-link" href={ book.amazon_link }>Amazon</a>
              <a className="shopping-link kobo" href={ book.kobo_link }>Kobo</a>
              <a className="shopping-link" href={ book.play_link }>Google Play</a>
            </div>
          </div>
        </section>
        <section className="book-detail-right">
          <div className="book-title-rating">
            <div className="book-detail-title">
              {book.title}
            </div>
            <div className="book-average-rating">
              <Rating
                full={ fullIcon }
                empty={ emptyIcon }
                initialRate={ this.props.bookDetail.average_rating }
                readonly={ true }
                />
            </div>
          </div>
          <div className="book-detail-right-mid">
            <div className="book-author-pub-date">
              <div className="book-detail-author">
                {book.author}
              </div>
              <div className="book-publisher">
                {book.publisher}
              </div>
              <div className="book-date">
                {book.date}
              </div>
            </div>
            <div className="change-bookshelves">
              <div className="your-bookshelves" >Your Bookshelves</div>
              <Select
                placeholder="Change Bookshelves"
                options={ bookshelves }
                value={ this.state.bookshelves }
                multi={true}
                onChange={ this.handleShelfChange }
                />
            </div>
            <div className="choose-read-status">
              <div className="your-read-status" >Your Read Status</div>
              <Select
                placeholder="Choose Read Status"
                options={ readStatuses }
                value={ this.state.readStatus }
                onChange={ this.handleReadStatusChange }
                />
            </div>
          </div>
          <div className="book-description">
            {book.description}
          </div>
        </section>
      </div>
    );
  }
}

export default BookDetail;
