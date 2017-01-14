import React from 'react';
import Select from 'react-select';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookDetail(this.props.bookId);
    this.props.fetchAllBookshelves();
  }

  handleClick(e) {

  }

  render() {
    let book = this.props.bookDetail;
    let bookshelves = this.props.bookshelves.map((bookshelf) => {
      return {
        value: bookshelf.name, label: bookshelf.name, id: bookshelf.id
      };
    });
    return (
      <div className="book-detail">
        <section className="book-detail-top">
          <div className="cover-shopping">
            <img className="book-cover" src={ book.image_url } />
            <div className="book-shopping">
              <a className="shopping-link" href={ book.amazon_link }>Amazon</a>
              <a className="shopping-link kobo" href={ book.kobo_link }>Kobo</a>
              <a className="shopping-link" href={ book.play_link }>Google Play</a>
            </div>
          </div>
          <div className="book-meta">
            <div className="book-detail-title">
              {book.title}
            </div>
            <div className="book-detail-author">
              {book.author}
            </div>
            <div className="book-publisher">
              {book.publisher}
            </div>
            <div className="book-date">
              {book.date}
            </div>
            <div>
              <Select
                name="form-field-name"
                value="one"
                options={ bookshelves }
                multi={ true }
                />
            </div>
          </div>
        </section>
        <div className="book-detail-bottom">
          <div className="book-description">
            {book.description}
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
