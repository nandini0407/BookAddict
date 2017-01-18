import React from 'react';
import { connect } from 'react-redux';
import { fetchBooksSummary } from '../../actions/book_actions';
import Search from './search';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooksSummary: (bookshelfId= null, readStatusId = null, query) => dispatch(fetchBooksSummary(query))
  };
};

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
