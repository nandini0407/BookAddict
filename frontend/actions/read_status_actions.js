import * as ReadStatusAPIUtil from '../util/read_status_api_util';

export const RECEIVE_ALL_READ_STATUSES = "RECEIVE_ALL_READ_STATUSES";

// async actions

export const fetchAllReadStatuses = () => (dispatch) => {
  return ReadStatusAPIUtil.fetchAllReadStatuses()
    .then((readStatuses) => dispatch(receiveAllReadStatuses(readStatuses)));
};

// sync actions

export const receiveAllReadStatuses = (readStatuses) => {
  return {
    type: RECEIVE_ALL_READ_STATUSES,
    readStatuses
  };
};
