import React from 'react';
import { Link } from 'react-router';

const BookListItem = ({ book }) => {
  return (
    <div>
      <Link to={`/user/books/${book.id}`}>{book.image_url}</Link>
    </div>
  );
};

export default BookListItem;
