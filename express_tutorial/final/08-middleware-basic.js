const express = require("express");
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
//middleware is everywhere in express
//if you have home and about route, you want to log the url, the method of the client
//when you work with middleware, you must work with the next middleware
//middleware - a function that takes a request and a response cycle
