const mongoose = require('mongoose');

const catSchema= mongoose.Schema({
    category: String
});

const category= mongoose.model('category',catSchema);

module.exports= category;