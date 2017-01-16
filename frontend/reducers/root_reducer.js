import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BooksSummaryReducer from './books_summary_reducer';
import BookDetailReducer from './book_detail_reducer';
import BookshelfReducer from './bookshelf_reducer';
import ReadStatusReducer from './read_status_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  booksSummary: BooksSummaryReducer,
  bookDetail: BookDetailReducer,
  bookshelves: BookshelfReducer,
  readStatuses: ReadStatusReducer,
  reviews: ReviewReducer
});

export default RootReducer;
