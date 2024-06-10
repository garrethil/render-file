const mongoose = require("mongoose");

const { Schema } = mongoose;

const contentSchema = new Schema({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
