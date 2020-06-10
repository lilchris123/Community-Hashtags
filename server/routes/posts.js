const router = require('express').Router();
const Post= require('../model/post');

router.route('/').get((req,res)=>{
    Post.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.get('/category/:category', (req,res) => {
    Post.find({ category: req.params.category })
    .then(data => res.json({
        name: req.params.category,
        posts: data
    }))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.get('/search/:query', (req,res) => {
    Post.find({ hashtags: req.params.query})
    .then(data => res.json({
        posts: data
    }))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports= router;