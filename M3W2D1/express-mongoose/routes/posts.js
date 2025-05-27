const express =  require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/posts/', function(req, res) {
  Post.find().then( allPosts => {
    res.status(200).json(allPosts)
  }).catch( error => res.status(400).json(error) );
});

router.get('/posts/:id', function(req, res) {
  const { id } = req.params;

  Post.findById(id)
  .populate({
    path: 'author',
    select: 'username -_id'
  })
  .then( post => {
    res.status(200).json(post);
  }).catch( error => res.status(400).json(error) );

});

router.post('/posts/create', function(req, res) {

  const { title, content, author } = req.body;

  Post.create({ title, content, author }).then( (newPost) => {
    console.log(newPost);
    res.status(201).json(newPost);
  }).catch( error => res.json(error) );

});

router.delete('/posts/:id/delete', function(req, res) {
  const { id } = req.params;

  Post.findByIdAndDelete(id).then( () => {
    res.status(204).send()
  }).catch( error => res.json(error) );

});

router.put('/posts/:id/update', function(req, res) {

  const { id } = req.params;
  const { title, content } = req.body;

  Post.findByIdAndUpdate(id, {title, content}).then(
    (updatedPost) => {
      res.status(204).json(updatedPost);
    }).catch( error => res.json(error) );

})

module.exports = router;
