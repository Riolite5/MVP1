import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import Login from "./components/Login";

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
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
