import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BooksSummaryReducer from './books_summary_reducer';
import BookDetailReducer from './book_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  booksSummary: BooksSummaryReducer,
  bookDetail: BookDetailReducer
});

export default RootReducer;
