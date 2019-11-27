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
  Lottery.create(req.body, function(err, lottery) {
    if(err) next(err);
    res.json(lottery);
  });
});

module.exports = router;