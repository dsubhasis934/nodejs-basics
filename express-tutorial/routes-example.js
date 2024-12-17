const express = require("express");
const app = express();
const port = 3000;
const products = [
  {
    id: 1,
    name: "abc",
  },
  {
    id: 2,
    name: "cde",
  },
  {
    id: 3,
    name: "fge",
  },
];
app.get("/", (req, res) => {
  res.send("Hello route example!");
});
app.get("/products/:id", (req, res) => {
  const id = parseInt(req?.params?.id);
  const productDetailsFromId = products.filter((product) => product?.id == id);
  res.status(200).json({ data: productDetailsFromId });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
