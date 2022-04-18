import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBookTest";
import ShowBookList from "./components/ShowBookListTest";
import ShowBookDetails from "./components/ShowBookDetailsTest";
import UpdateBookInfo from "./components/UpdateBookInfoTest";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<ShowBookList />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
            <Route path="/show-book/:id" element={<ShowBookDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
