/* eslint-disable no-underscore-dangle */
const router= require('express').Router();
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const Users= require('../model/user');
const Post= require('../model/post');
const { authenticateToken, authenticateAdmin }= require('../middleware/auth-middleware');

router.route('/login').post( (req, res) => {
    const { username, password } = req.body;

    Users.findOne({ username })
    .then(async (user) => {
        if(await bcrypt.compare(password, user.password)){
            const token= jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET);
            res.json({ token });
        }
        else
            res.status(401).json({err: 'Incorrect password try again'});
    })
    .catch(() => res.status(401).json({err: `Username not found try again`}));
})

router.route('/register').post( async (req,res) => {

    const { firstName, lastName, email, username, password} = req.body;
    const doesUserExist = await Users.exists({ username: username });
    if(doesUserExist){
        return res.status(400).json('User already exist');
    }
    let hashedPassword;
    try{
        hashedPassword= await bcrypt.hash(password, 10);
    }catch(err){ return res.status(400).json('Password field empty')}
    
    const newUser= new Users({
        firstName, 
        lastName, 
        email, 
        username, 
        password: hashedPassword,
        role: 'USER',
        likedContent: []
    });
    return newUser.save()
    .then((data) => res.status(201).json(data))
    .catch(err => res.status(400).json(`Failed to register user ${err}`));
})

router.route('/').get([authenticateToken, authenticateAdmin],(req,res)=>{
    Users.find().then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/posts').get(authenticateToken,(req,res)=>{
    Post.find({createdBy: req.user.username}).then(posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

.post(authenticateToken,(req,res)=>{
    const { hashtags, description, category} = req.body;
    const newPost= new Post({
        createdBy: req.user.username,
        hashtags,
        likes: 0,
        description,
        likedBy: [],
        category
    });

    newPost.save().then((data)=> res.status(201).json(data)).catch(err=> res.status(400).json(`Error ${err}`));

})

.put(authenticateToken,(req,res)=>{
    const { _id, hashtags, description, category} = req.body;
    Post.findByIdAndUpdate(_id,{
        hashtags,
        description,
        category
    }).then((data)=> res.status(200).json(data)).catch(err=> res.status(400).json(`Error ${err}`));

})

router.route('/posts/:id').delete(authenticateToken,(req, res)=>{
    Post.findByIdAndDelete({_id: req.params.id})
    .then(()=> res.json('deleted from DB'))
    .catch((err)=> res.status(400).json(`Error ${err}`));
});

module.exports= router;

