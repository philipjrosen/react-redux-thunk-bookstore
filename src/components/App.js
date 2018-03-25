import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./common/HomePage";
import About from "./common/AboutPage";
import Book from "./book/BookPage";
import Header from "./common/Header";

const books = [
  { title: "War and Peace", author: "Tolstoi" },
  { title: "The Magic Mountain", author: "Thomas Mann" }
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" render={() => <Book books={books} />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
