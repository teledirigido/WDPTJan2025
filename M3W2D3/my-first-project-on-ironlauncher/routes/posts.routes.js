const router = require("express").Router();
const Post = require('../models/Post.model');

// GET /api/posts
router.get("/posts", (req, res, next) => {
  Post.find().then( allPosts => {
    res.json(allPosts);
  }).catch( error => res.status(500).json(error) );
});

// POST /api/posts
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  Post.create({ title, content }).then( newPost => {
    res.json(newPost);
  }).catch( error => res.status(500).json(error) );

});

// GET /api/posts/:id
router.get("/posts/:id", (req, res, next) => {
  const { id } = req.params;
  Post.findById(id).then( foundPost => {
    res.json(foundPost);
  }).catch( error => res.status(500).json(error) );
});

// PUT /api/posts/:id
router.put("/posts/:id", (req, res, next) => {
  const { id } = req.params;
  Post.findByIdAndUpdate(id, req.body, { new: true }).then( updatedPost => {
    res.json(updatedPost);
  }).catch( error => res.status(500).json(error) );
});


// DELETE /api/posts/:id
router.delete("/posts/:id", (req, res, next) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id).then( () => {
    res.json({ message: `Post ${id} has been delete` });
  })
});

module.exports = router;
