var express = require('express');
var router = express.Router();
var Lottery = require('../models/Lottery');

router.get('/lottery', function(req, res, next) {
  Lottery.find(function(err, lotteries) {
    if(err) next(err);
    res.json(lotteries);
  });
});

router.post('/lottery', function(req, res, next) {
  Lottery.insertMany(req.body, function(err, lotteries) {
    if(err) next(err);
    res.json(lotteries);
  });
});

module.exports = router;