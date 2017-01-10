import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT_SUCCESS, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.user,
        errors: []
      };
    case RECEIVE_LOGOUT_SUCCESS:
      return _nullState;
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default SessionReducer;
