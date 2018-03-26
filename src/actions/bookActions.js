import Axios from "axios";
// API URL
const apiUrl = "https://5ab7f2473ddb860014f13f0a.mockapi.io/api/books";

// Sync Action
export const fetchBooksSuccess = books => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    books
  };
};

export const createBookSuccess = book => {
  return {
    type: "CREATE_BOOK_SUCCESS",
    book
  };
};

//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return dispatch => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createBook = book => {
  return dispatch => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
