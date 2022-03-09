var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'JIF Express Services' });
});

router.get('/subpathhandler', function (req, res, next) {
  res.render('index', { title: 'I am NOT a page - I am a subpath handler!' });
});

module.exports = router;
