/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Additional API entriy points would go under /api/v1 - now hot reload works on manual browser reload!!!');
});

module.exports = router;
