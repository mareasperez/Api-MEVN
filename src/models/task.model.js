const mongoose = require("mongoose");
const { Schema } = mongoose;

const Task = new Schema({
  title: String,
  description: String,
});
mongoose.model("Task", Task);
module.exports = mongoose.model("Task", Task);
