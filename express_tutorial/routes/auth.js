const express = require('express');
const router = express.Router();

//login for form validation path already being handled in app.js
router.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    }
  
    res.status(401).send("Please Provide Credentials");
  });
  module.exports = router;