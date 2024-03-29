import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const ShowBookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8002/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let bookList;
  if (!books) {
    bookList = "there is no book record!";
  } else {
    bookList = books.map((book, k) => <BookCard book={book} key={k} />);
  }

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <Link to="/login" className="btn btn-outline-warning ">
              Login
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
};

export default ShowBookList;
