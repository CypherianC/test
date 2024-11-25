var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/card', function(req, res) {
  res.render('card');
});

router.get('/agen', function(req, res) {
  res.render('agen');
  router.use
});

router.get('/adminauth', function(req, res) {
  res.render('adminauth');
});

router.get('/adminp', function(req, res) {
  res.render('adminp');
});

router.get('/admincad', function(req, res) {
  res.render('admincad');
});

router.get('/ped', function(req, res) {
  res.render('ped');
});

module.exports = router;