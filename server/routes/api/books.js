const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");

//@route GET api/books/test
//@description tests books route
//@access Public
router.get("/test", (req, res) => res.send("book router testing!"));

// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  Book.find({})
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: err.message }));
});

// @route GET api/books/:id
// @desciription Get singl;;e book by id
// @access Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});


// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  console.log("~~~~~~reached the post in the API")
  console.log(req.body)
  Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

//@route PUT api/books/:id
//@description Update book
//@access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ msg: "Book entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
});
module.exports = router;
