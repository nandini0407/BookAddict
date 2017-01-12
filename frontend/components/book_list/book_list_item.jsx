import React from 'react';
import { Link } from 'react-router';

const BookListItem = ({ book }) => {
  return (
    <div className="book-tile">
      <Link to={`/user/books/${book.id}`}>
        <img className="book-image" src={ book.image_url } />
        <div className="book-title">
          { book.title }
        </div>
        <div className="book-author">
          { book.author }
        </div>
      </Link>
    </div>
  );
};

export default BookListItem;
