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
      <div>
        {book.image_url}
        {book.title}
        {book.author}
        {book.publisher}
        {book.date}
        {book.description}
        <button>Amazon</button>
        <button>Kobo</button>
        <button>Google Play</button>
      </div>
    );
  }
}

export default BookDetail;
