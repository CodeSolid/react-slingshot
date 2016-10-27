/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* Get something arbitrary, a person, for example */
router.get('/', function(req, res, next) {
  res.send( '{"person": {"name": "John Lockwood", "role": "Programmer and Test Case"}}' );
});

module.exports = router;
