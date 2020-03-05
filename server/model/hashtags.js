var mongoose = require("mongoose");

var tagSchema = mongoose.Schema({
  tagName: { type: String, required: true, unique: true, trim: true }
});

var tagsSchema = mongoose.Schema({
  tags: [String]
});

var tagsCollectionSchema = mongoose.Schema({
  name: String,
  tags: [[String]]
});


// var tag= mongoose.model("tag",tagSchema);
// var tags= mongoose.model("tags",tagsSchema);
var tagsCollection = mongoose.model("tagsCollection", tagsCollectionSchema);

//module.exports = tag;
//module.exports = tags;
module.exports = tagsCollection;
