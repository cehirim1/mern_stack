const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res
app.use([logger, authorize]);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");

});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//to execute multiple middleware functions, you place them in an array which are executed in the order they are passed in
//middleware is all over express
//if you don't want the middleware in all your routes, you can pass it to the routes you want them to be used
//e.g we can move line 6 array into the items routes
//ap.use() expects a middleware function as an argument