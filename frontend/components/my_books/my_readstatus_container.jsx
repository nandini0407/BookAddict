import React from 'react';
import { connect } from 'react-redux';
import MyReadStatus from './my_readstatus';
import { fetchAllReadStatuses } from '../../actions/read_status_actions';

const mapStateToProps = (state) => {
  return {
    readStatuses: state.readStatuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllReadStatuses: () => dispatch(fetchAllReadStatuses()),
  };
};

const MyReadStatusContainer = connect(mapStateToProps, mapDispatchToProps)(MyReadStatus);

export default MyReadStatusContainer;
