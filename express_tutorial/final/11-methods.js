const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;//define the body here & store it in a variable
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

//JavaScrip form validation
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

//login for form validation
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

//modifies/updates the data 
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;//defines the param we want to update, informs the server of that parameter to update and refresh with changes
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));//find the name in the object array

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  //else if person is found, map the person to the new name
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

//setup is the same as put, but we are not to have anything at the body
//you can have the same path with different methods and it work as well.
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//to run post request, we use a tool that will help us test things faster since we cannot configure the browser to run post requests - we sue postman
//express.urlencoded() is a built-in middleware in Express.js. The main objective of this method is to parse the incoming request (post/put) with urlencoded payloads and is based upon the body-parser.
//This method returns the middleware that parses all the urlencoded bodies.
