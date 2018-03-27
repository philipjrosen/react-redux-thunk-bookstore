// Set up your root reducer here...
import { combineReducers } from "redux";
import { booksReducer, bookReducer } from "./bookReducers";

export default combineReducers({
  books: booksReducer,
  book: bookReducer
});
