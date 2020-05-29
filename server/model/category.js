const mongoose = require("mongoose");

// var tagSchema = mongoose.Schema({
//   tagName: { type: String, required: true, unique: true, trim: true }
// });

// var tagsSchema = mongoose.Schema({
//   tags: [String]
// });

const categorySchema = mongoose.Schema({
  name: String,
  posts: [
    {
    id: String,
    createdBy: String,
    hashtags: [String],
    likes: Number,
    description: String
    }
  ]
});

const category = mongoose.model("tagsCollection", categorySchema);

module.exports = category;
