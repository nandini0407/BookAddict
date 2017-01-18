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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render (){
    let bookshelves = this.props.bookshelves.map((bookshelf) => {
        return <Link to={`/user/bookshelves/${bookshelf.id}`} key={ bookshelf.id }>
           <div className="bs-list-item">
            <li>{ bookshelf.name }</li>
          </div>
        </Link>;
    });
    return (
      <div className="bookshelves">
        <h3 className="bs-text">My Bookshelves</h3>
        <ul className="bs-list">
          { bookshelves }
        </ul>
        <div className="add-bookshelf-form">
          <h4 className="add-bookshelf-text">Add a Bookshelf</h4>
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
      </div>
    );
  }
}

export default MyBookshelves;
