import React from 'react';

class MyBookshelves extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className="bookshelves">
        <h3 className="bs-text">My Bookshelves</h3>
        <ul className="bs-list">
          <li>Shelf 1</li>
          <li>Shelf 2</li>
          <li>Shelf 3</li>
        </ul>
      </div>
    );
  }
}

export default MyBookshelves;
