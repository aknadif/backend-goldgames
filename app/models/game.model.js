const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model('Game', Game);
