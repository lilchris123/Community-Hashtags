const mongoose = require('mongoose');

const topTagSchema= mongoose.Schema({
    popular: [
        [{type: String, required: true, unique: true, trim: true}],
        [{type: String, required: true, unique: true, trim: true}],
        [{type: String, required: true, unique: true, trim: true}]
    ]
});

const topTags= mongoose.model('topTags',topTagSchema);
module.exports= topTags;