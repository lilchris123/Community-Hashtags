const router = require('express').Router();
let tagsCollection= require('../model/hashtags');

router.route('/topHashtags').get((req,res)=>{
    tagsCollection.find()
    .then(tags => res.json(tags))
    .catch(err => res.status(400).json('Error '+ err));
});

// router.get('/api/data/topHashtags', (req,res)=>{
//     res.sendFile(`${__dirname}//api/data/topHashtags.json`);
//     console.log("data sent");
// });

router.route('/topHashtags').post((req, res)=>{
    const collectionName=req.body.name;
    const tags = req.body.tags;

    const newCollection = new tagsCollection({
        'name': collectionName,
        'tags': tags
    });

    newCollection.save()
    .then(()=> res.json('new Hashtags collection added!'))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/topHashtags').delete((req, res)=>{
    tagsCollection.findOneAndDelete({collectionName: []})
    .then(()=> res.json('deleted from DB'))
    .catch((err)=> res.status(400).json('Error '+ err));
})

module.exports= router;