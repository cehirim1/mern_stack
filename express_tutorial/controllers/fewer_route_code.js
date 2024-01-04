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

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);
module.exports = router;

//we still need to modify the people file to look clean - separation of concerns
