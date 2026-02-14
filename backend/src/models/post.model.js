const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
});
const postsModel = mongoose.model("note", noteSchema);
module.exports = postsModel;
