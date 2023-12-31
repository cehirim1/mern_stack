const express = require("express"); //import express from 'express'
const app = express(); //invoke express()

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found!</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

//methods we use the most frequently - CRUD methods

// app.post - Create data
// app.put - Update data
// app.delete - Delete data
// app.get - Read data
// app.all - all methods. Uses a wildcard argument
// app.use - middleware & routes
// app.listen - listen to port

//explicitly add the staus codes to your response
