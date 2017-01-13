import React from 'react';
import { Link } from 'react-router';

class MyBookshelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleAddShelf = this.handleAddShelf.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBookshelves();
  }

  handleAddShelf(e) {
    e.preventDefault();
    this.props.addBookShelf(this.state)
      .then(() => this.setState({ name: "" }));
  }

  handleShelfClick(bookshelfId) {
    return (e) => {
      // debugger;
      this.props.fetchBooksSummary(bookshelfId);
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render (){
    let bookshelves = this.props.bookshelves.map((bookshelf) => {
      return <li key={ bookshelf.id }>
        <Link to={`/user/bookshelves/${bookshelf.id}`} onClick={ this.handleShelfClick(bookshelf.id) }>{ bookshelf.name }</Link>
      </li>;
    });
    return (
      <div className="bookshelves">
        <h3 className="bs-text">My Bookshelves</h3>
        <ul className="bs-list">
          { bookshelves }
        </ul>
        <form className="add-shelf-form" onSubmit={ this.handleAddShelf }>
          <input
            className="add-shelf-input"
            type="text"
            value={ this.state.name }
            onChange={ this.update('name') }
            />
          <input
            className="add-shelf-button"
            type="submit"
            value="Add Bookshelf"
            />
        </form>
      </div>
    );
  }
}

export default MyBookshelves;
