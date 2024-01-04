//get express
const express = require("express");

//get router
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/modified_people");


router.get("/", getPeople);

router.post("/", createPerson);

//JavaScrip form validation
router.post("/postman", createPersonPostman);

//modifies/updates the data
router.put("/:id", updatePerson);

//setup is the same as put, but we are not to have anything at the body
//you can have the same path with different methods and it work as well.
router.delete("/:id", deletePerson);
module.exports = router;

//we still need to modify the people file to look clean - separation of concerns
