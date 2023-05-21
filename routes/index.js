// Name: Maria Macias
// StudentId: 301290835
// Date: May 28th 2023
// File name: index.js

var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
  //Identify which route is being called and render view accordingly
  if(req.originalUrl == '/contact-me') res.render('contact-me');
  else if (req.originalUrl == '/my-projects') res.render('my-projects')
  else if (req.originalUrl == '/services') res.render('services')
  else if (req.originalUrl == '/about-me') res.render('about-me')
  else if (req.originalUrl == '/home') res.render('index')
  
});

module.exports = router;
