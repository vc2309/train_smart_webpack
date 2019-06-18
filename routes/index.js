var express = require('express');
var router = express.Router();
// console.log("vishnu");
// var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("vishnu");
	// return "HELLO";
  res.render('index', { title: 'Express' });
});

module.exports = router;
// app.listen(5000);