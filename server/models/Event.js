const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
