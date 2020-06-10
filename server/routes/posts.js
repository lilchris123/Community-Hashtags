/* eslint-disable no-param-reassign */
const router = require('express').Router();
const Post= require('../model/post');
const { authenticateToken }= require('../middleware/auth-middleware');

router.route('/').get((req,res)=>{
    Post.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/like').put(authenticateToken,(req,res)=>{
    const {postId} = req.body;
    
    Post.findById(postId,(err, doc) =>{
        const {likedBy} = doc;
        if(err) res.sendStatus(400);
        else if(likedBy.includes(req.user.username)){
            doc.likedBy= likedBy.filter((user) => user !== req.user.username );
            return doc.save();
        }
        doc.likedBy=[...doc.likedBy, req.user.username];
        return doc.save();
    }).then((data)=> res.status(200).json(data)).catch(() => res.sendStatus(500));
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