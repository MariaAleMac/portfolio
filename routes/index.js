// Name: Maria Macias
// StudentId: 301290835
// Date: May 28th 2023
// File name: index.js

var express = require('express');
var router = express.Router();

/* GET pages. */

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/about-me', function(req, res, next) {
  res.render('about-me');
});

router.get('/contact-me', function(req, res, next) {
  res.render('contact-me');
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/my-projects', function(req, res, next) {
  res.render('my-projects');
});


module.exports = router;
