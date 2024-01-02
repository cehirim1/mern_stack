//always require and invoke the express function

const express = require("express");
const path = require("path"); // absolute path to the file

const app = express();

// setup static and middleware using app.use(express.static('path'))
// serve the public folder which contains all other files that make up the entire application/website
//common convention is calling the folder public/static which sits at the root of the application
//express handles the routing of the files to the appropriate functions including the content-types, etc.
app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

//we use the sendFile function to add static assets and SSR - Server Side Rendering (quick and faster rendering)

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
