const express = require("express");

const app = express();

//define middleware

app.use(express.json()); //so this middleware automatically parse all the json while we request any route

const books = [
  {
    id: 1,
    title: "Book1",
  },
  {
    id: 2,
    title: "Book2",
  },
  {
    id: 3,
    title: "Book3",
  },
];

//intro route
app.get("/", (req, res) => {
  res.send("Welcome to the book store");
});

//get all books
app.get("/books", (req, res) => {
  res.status(200).json({ books: books });
});

//get a single books
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === parseInt(id));
  res.status(200).json({ books: book });
});

//add a book
app.post("/books/add", (req, res) => {
  const { id, title } = req.body;
  books.push({ id: id, title: title });
  res.status(200).json({ message: "book added successfully", books: books });
});

//update a book

//get a single books
app.put("/books/update/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === parseInt(id));
  if (book) {
    const { title } = req.body;
    book.title = title || book.title;
    res.status(200).json({ message:`id ${book?.id} bok title successfully updated `,books: book });
  }
});

//delete a book
app.delete("/books/delete/:id", (req, res) => {
    const id = req.params.id;
    const bookCurrentIndex = books.findIndex((book) => book.id === parseInt(id));
    if (bookCurrentIndex !=-1) {
     const deleteBook=books.splice(bookCurrentIndex,1)
      res.status(200).json({ message:`book successfully deleted `,books: deleteBook });
    }
  });

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
