const mongoose = require("mongoose");

// var tagSchema = mongoose.Schema({
//   tagName: { type: String, required: true, unique: true, trim: true }
// });

// var tagsSchema = mongoose.Schema({
//   tags: [String]
// });

const hashtagsCollectionSchema = mongoose.Schema({
  name: String,
  tags: [[String]]
});

const hashtagsCollection = mongoose.model("tagsCollection", hashtagsCollectionSchema);

module.exports = hashtagsCollection;
