const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title can not be greater than 100"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1000, "year must be at least 1000"],
    max: [new Date().getFullYear(), "Year cannot be in future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model('books',bookSchema)