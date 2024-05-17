const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  seats: {
    type: Object,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
