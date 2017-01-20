import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

const BookListItem = ({ book }) => {
  if (!book) {
    return (<div className="book-tile"></div>);
  }

  const fullIconSmall = <img
    className="icon"
    src="https://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/full_heart_hqrbof.png"
    width="12"
    height="12"
    />;
  const emptyIconSmall = <img
    className="icon"
    src="https://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_40,w_40/v1484724953/empty_heart_rmxig8.png"
    width="12"
    height="12"
    />;

  let title = book.title;
  if (title.length > 29) {
    title = title.substring(0, 26);
    title = title.concat("...");
  }

  let imageUrl = book.image_url;
  if (imageUrl !== undefined) {
    let idx = imageUrl.indexOf('upload');
    let lastPartIdx = imageUrl.indexOf('book');
    let lastPart = imageUrl.substring(lastPartIdx);
    imageUrl = imageUrl.substring(0, (idx + 7)) + 'c_scale,h_195,w_290/' + lastPart;
  }

  return (
    <div className="book-tile">
      <Link to={`/user/books/${book.id}`} className="book-list-link">
        <img className="book-image" src={ imageUrl } />
        <div className="book-list-title">{ title }</div>
        <div className="book-list-author">{ book.author }</div>
        <div className="book-list-rating">
          <Rating
            full={ fullIconSmall }
            empty={ emptyIconSmall }
            initialRate={ book.average_rating }
            readonly={ true }
            />
        </div>
      </Link>
    </div>
  );
};

export default BookListItem;
