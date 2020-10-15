// users.js, Mohammed Hsjo, 301155309, and 2020/10/14

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Place holder');
});

module.exports = router;
