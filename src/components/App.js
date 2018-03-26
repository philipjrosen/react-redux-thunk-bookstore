import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import * as bookActions from "../actions/bookActions";
import Home from "./common/HomePage";
import About from "./common/AboutPage";
import Book from "./book/BookPage";
import Header from "./common/Header";

const store = configureStore();
store.dispatch(bookActions.fetchBooks());

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Book} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
