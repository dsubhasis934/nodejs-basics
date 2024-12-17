const express = require("express");

const path = require("path");

const app = express();

//set view engine as ejs

app.set("view engine", "ejs");

//set the directory for the views

app.set("views", path.join(__dirname, "views")); //this means my views are set to my views folder

const products = [
  {
    id: 1,
    name: "product1",
  },
  {
    id: 2,
    name: "product2",
  },
  {
    id: 3,
    name: "product3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products }); //res.render use for render details of a specific file
});

app.listen(4000,()=>{
    console.log("server is running at 4000")
})