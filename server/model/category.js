const mongoose = require('mongoose');

const categorySchema= mongoose.Schema({
    popular: [
        [{type: String, required: true, unique: true, trim: true}],
        [{type: String, required: true, unique: true, trim: true}],
        [{type: String, required: true, unique: true, trim: true}]
    ]
});

const category= mongoose.model('category',categorySchema);
module.exports= category;