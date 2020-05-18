const router = require('express').Router();
const TagsCollection= require('../model/hashtags');

router.route('/topHashtags').get((req,res)=>{
    TagsCollection.findOne()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.post((req, res)=>{
    const collectionName= req.body.name;
    const { tags } = req.body;

    const newCollection = new TagsCollection({
        'name': collectionName,
        'tags': tags
    });

    newCollection.save()
    .then(()=> res.json('new Hashtags collection added!'))
    .catch(err => res.status(400).json(`Error ${err}`));
})

.delete((req, res)=>{
    TagsCollection.findOneAndDelete({name: 'popular'})
    .then(()=> res.json('deleted from DB'))
    .catch((err)=> res.status(400).json(`Error ${err}`));
})

module.exports= router;