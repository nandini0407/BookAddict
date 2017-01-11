import React from 'react';
import MyBookshelvesContainer from './my_bookshelves_container';
import MyReadStatusContainer from './my_readstatus_container';

const MyBooks = () => {
  return (
    <div className="my-books">
      <h2 className="my-books-text">My Books</h2>
      <MyBookshelvesContainer />
      <MyReadStatusContainer />
    </div>
  );
};

export default MyBooks;
