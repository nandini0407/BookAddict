import React from 'react';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookDetail(this.props.bookId);
  }

  render() {
    let book = this.props.bookDetail;
    return (
      <div className="book-detail">
        <img className="book-cover" src={ book.image_url } />
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
        <div className="book-description">
          {book.description}
        </div>
        <div className="book-shopping">
          <button className="shopping-button">Amazon</button>
          <button className="shopping-button">Kobo</button>
          <button className="shopping-button">Google Play</button>
        </div>
      </div>
    );
  }
}

export default BookDetail;
