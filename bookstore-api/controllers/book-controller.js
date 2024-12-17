const Book = require("../models/book");
const getAllBooks = async (req, res) => {
  try {
    const allBooksResponse = await Book.find({});
    if (allBooksResponse.length > 0) {
      res.status(201).json({
        success: true,
        message: "Books fetched Successfully",
        data: allBooksResponse,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getBooksById = async (req, res) => {};

const addBooks = async (req, res) => {
  try {
    const newBooksCredentials = req.body;
    const addNewBooksResponse = await Book.create(newBooksCredentials);
    if (addNewBooksResponse) {
      res.status(201).json({
        success: true,
        message: "book added successfully",
        data: addNewBooksResponse,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

const updateBooks = async (req, res) => {};

const deleteBooks = async (req, res) => {};

module.exports = {
  getAllBooks,
  getBooksById,
  addBooks,
  updateBooks,
  deleteBooks,
};
