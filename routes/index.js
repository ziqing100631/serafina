var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app');
});
//我的主页
router.get('/index', function(req, res, next) {
  res.render('page/index');
});
router.get('/homepage', function(req, res, next) {
  res.render('page/homepage');
});
router.get('/about', function(req, res, next) {
  res.render('page/about');
});
module.exports = router;
