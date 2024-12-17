// Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express.js routing layer.

// It is a flexible tool that helps add functionalities like logging, authentication, error handling, and more to Express applications

// Types of Middleware
// Express JS offers different types of middleware and you should choose the middleware on the basis of functionality required.

// Application-level middleware: Bound to the entire application using app.use() or app.METHOD() and executes for all routes.
// Router-level middleware: Associated with specific routes using router.use() or router.METHOD() and executes for routes defined within that router.
// Error-handling middleware: Handles errors during the request-response cycle. Defined with four parameters (err, req, res, next).
// Built-in middleware: Provided by Express (e.g., express.static, express.json, etc.).
// Third-party middleware: Developed by external packages (e.g., body-parser, morgan, etc.).

const express = require("express");

const app = express();

//define middleware function

const firstMiddleWare = (req, res, next) => {
  console.log("this middleware will run on every request");
  next();  //so by this our response will be got,if we remove this we dont et any response
};

app.use(firstMiddleWare); //so you can say that its application-level-middleware

app.get("/", (req, res) => {
  res.send("Hello home page");
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
