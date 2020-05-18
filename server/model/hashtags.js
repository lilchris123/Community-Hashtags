const mongoose = require("mongoose");

// var tagSchema = mongoose.Schema({
//   tagName: { type: String, required: true, unique: true, trim: true }
// });

// var tagsSchema = mongoose.Schema({
//   tags: [String]
// });

const tagsCollectionSchema = mongoose.Schema({
  name: String,
  tags: [[String]]
});

const tagsCollection = mongoose.model("tagsCollection", tagsCollectionSchema);

module.exports = tagsCollection;
