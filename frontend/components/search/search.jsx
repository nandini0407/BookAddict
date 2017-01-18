import React from 'react';
import { hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  update(field, value) {
    this.setState({ [field]: value });
  }

  handleChange(e) {
    e.preventDefault();
    let value = e.target.value;
    this.update('query', value);
    hashHistory.push(`/user/search/${this.state.query}`);
  }

  render() {
    return (
      <div className="search-div">
        <form className="search-form">
          <FontAwesome
            name='search'
            className="search-icon"
            size='2x'
            />
          <input
            placeholder="Search for Books"
            type="text"
            onChange={ this.handleChange }
            value={ this.state.query }
            className="search-input"
            />
        </form>
      </div>
    );
  }
}

export default Search;
