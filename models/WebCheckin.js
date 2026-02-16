const mongoose = require('mongoose');

const webCheckinSchema = new mongoose.Schema({
  airlineCode: String,
  airlineName: String,
  url: String,
  image: String,
}, { timestamps: true }); // adds createdAt, updatedAt

module.exports = mongoose.model('WebCheckin', webCheckinSchema);
