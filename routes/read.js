var express = require('express');
var router = express.Router();
var ReadLater = require('../models/ReadLater');

router.get('/read-later', function(req, res, next) {
  ReadLater.find(function(err, reads) {
    if(err) return next(err);
    res.json(reads);
  })
});

router.post('/read-later', function(req, res, next) {
  ReadLater.create(req.body, function(err, read) {
    if(err) return next(err);
    res.json(read);
  })
});

module.exports = router;