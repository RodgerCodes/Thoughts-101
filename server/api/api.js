const express = require('express');
const router = express.Router();
const PostSchema = require('../models/post');

router.get('/', async(req, res) => {
   try {
      const post = await PostSchema.find();
      res.send(post)
   } catch (err) {
       console.log(err)
   }
});

router.post('/', async(req,res) => {
    try {
        let {title, name, body} = req.body;
        if(!name){
            res.send({message:'Name field is required'})
        }
        
        const data = new PostSchema({
            title,
            name,
            body
        });
        const saveddata = await data.save();
        res.send(saveddata)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id',async(req,res) => {
    try {
        const data = await PostSchema.deleteOne({
            _id:req.params.id
        });
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
    }
})






module.exports = router;
