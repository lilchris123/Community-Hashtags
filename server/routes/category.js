const router = require('express').Router();
const Category= require('../model/category');

router.route('/category').get((req,res)=>{
    Category.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.post((req, res)=>{
    const categoryName= req.body.name;
    const { posts } = req.body;

    const newCategory = new Category({
        'name': categoryName,
        'posts': posts,
    });

    newCategory.save()
    .then(()=> res.json('new Category added!'))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.delete((req, res)=>{
    Category.findOneAndDelete({name: 'popular'})
    .then(()=> res.json('deleted from DB'))
    .catch((err)=> res.status(400).json(`Error ${err}`));
});

router.get('/category/:category',(req,res) => {
    Category.findOne({name: req.params.category})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

module.exports= router;