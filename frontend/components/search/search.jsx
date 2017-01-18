import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.update('query');
    // hashHistory.push({`/users/search/${this.state.query}`});
  }

  render() {
    return (
      <div className="search-div">
        <form className="search-form">
          <input
            type="text"
            onChange={ this.handleChange }
            />
        </form>
      </div>
    );
  }
}

export default Search;
