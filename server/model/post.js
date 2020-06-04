const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    createdBy: String,
    hashtags: [String],
    likes: Number,
    description: String,
    likedBy: [String],
    category: String
});

const post = mongoose.model("post", postSchema);

module.exports = post;