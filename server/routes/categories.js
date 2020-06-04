const router = require('express').Router();
const Category= require('../model/category');

router.route('/').get((req,res)=>{
    Category.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.post((req, res)=>{
    const { category } = req.body;

    const newCategory = new Category({category});

    newCategory.save()
    .then((data)=> res.status(201).json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

module.exports= router;