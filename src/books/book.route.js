const express = require ('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const router = express.Router ()

// Frontend api => Backend server => backend => controller => book schema => database => sebd data to server => back to the frontend
// post = when submit somthing from frontend to db
// get = when get something back  from db
//put/patch = when you just edit or update data
//delete = when you want to delete data

//post a book
router.post("/create-book", postABook)

//get all books
router.get("/", getAllBooks)

//sngle book endpoint
router.get("/:id",getSingleBook )

//update  a book
router.put("/edit/:id",updateBook)

//deleted a book
router.delete("/:id", deleteBook)


module.exports = router;