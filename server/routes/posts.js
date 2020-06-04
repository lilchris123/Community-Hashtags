const router = require('express').Router();
const Post= require('../model/post');

router.route('/').get((req,res)=>{
    Post.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.post((req,res)=>{
    const {createdBy, hashtags, likes, description, likedBy, category} = req.body;
    const newPost= new Post({
        createdBy,
        hashtags,
        likes,
        description,
        likedBy,
        category
    });

    newPost.save().then((data)=> res.status(201).json(data)).catch(err=> res.status(400).json(`Error ${err}`));

});

router.get('/category/:category', (req,res) => {
    Post.find({ category: req.params.category })
    .then(data => res.json({
        name: req.params.category,
        posts: data
    }))
    .catch(err => res.status(400).json(`Error ${err}`));
})

module.exports= router;