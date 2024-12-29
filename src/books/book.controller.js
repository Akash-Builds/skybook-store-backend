const Book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error createing book", error);
    res.status(500).send({ message: "Book posting failed" });
  }
};

//get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error book", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Failed to find book" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error book", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

//update book data
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBook) {
      res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book updated successfully",
      book: updateBook,
    });
  } catch (error) {
    console.error("Error updating a book", error);
    res.status(500).send({ message: "Failed to update books" });
  }
};

//delete data
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error("Error deleting a book", error);
    res.status(500).send({ message: "Failed to delete books" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};