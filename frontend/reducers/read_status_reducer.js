import { RECEIVE_ALL_READ_STATUSES } from '../actions/read_status_actions';

const ReadStatusReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_READ_STATUSES:
      return action.readStatuses;
    default:
      return state;
  }
};

export default ReadStatusReducer;
