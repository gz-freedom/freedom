var mongoose = require('mongoose');

var readLaterSchema = new mongoose.Schema({
  title: String,
  url: String,
  tags: String,
  read: { type: Boolean, default: false },
  updated_date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('readLater', readLaterSchema)