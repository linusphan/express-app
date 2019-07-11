var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    links: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About',
        href: '/',
      },
      {
        title: 'Contact',
        href: '/',
      },
    ],
  });
});

module.exports = router;
