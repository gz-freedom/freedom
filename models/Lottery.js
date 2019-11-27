var mongoose = require('mongoose');

var lotterySchema = new mongoose.Schema({
  expect: Number,
  opencode: String,
  opentime: String
});

module.exports = mongoose.model('Lottery', lotterySchema);