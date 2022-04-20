import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { createHashHistory } from "history";
export const history = createHashHistory();

const UpdateBookInfo = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  let id_ =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  axios
    .get("http://localhost:8002/api/books/" + String(id_))
    .then((res) => {
      // console.log(`The book id is ${id_} `);
      setBook(res.data);
    })
    .catch((err) => {
      console.log("Error from UpdateBookInfo");
    });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBook((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id_ =
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ];

    const data = book;

    axios
      .put("http://localhost:8002/api/books/" + String(id_), data)
      .then((res) => {
        setBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
      })
      .catch((err) => {
        console.log("Error in put request");
      });
  };

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={book.title}
                onChange={handleChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={book.isbn}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={book.author}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={book.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="date"
                placeholder="published_date"
                name="published_date"
                className="form-control"
                value={new Date().toISOString().replace("T", "/").split("/")[0]}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of this Book"
                name="publisher"
                className="form-control"
                value={book.publisher}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookInfo;
