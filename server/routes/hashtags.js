const router = require('express').Router();
const HashtagsCollection= require('../model/hashtags');

router.route('/hashtags').get((req,res)=>{
    HashtagsCollection.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.post((req, res)=>{
    const collectionName= req.body.name;
    const { tags } = req.body;

    const newCollection = new HashtagsCollection({
        'name': collectionName,
        'tags': tags
    });

    newCollection.save()
    .then(()=> res.json('new Hashtags collection added!'))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.delete((req, res)=>{
    HashtagsCollection.findOneAndDelete({name: 'popular'})
    .then(()=> res.json('deleted from DB'))
    .catch((err)=> res.status(400).json(`Error ${err}`));
});

router.get('/hashtags/:category',(req,res) => {
    HashtagsCollection.findOne({name: req.params.category})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

module.exports= router;