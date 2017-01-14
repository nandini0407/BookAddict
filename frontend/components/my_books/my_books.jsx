import React from 'react';
import MyBookshelvesContainer from './my_bookshelves_container';
import MyReadStatusContainer from './my_readstatus_container';

const MyBooks = () => {
  return (
    <div className="my-books">
      <MyBookshelvesContainer />
      <MyReadStatusContainer />
    </div>
  );
};

export default MyBooks;
