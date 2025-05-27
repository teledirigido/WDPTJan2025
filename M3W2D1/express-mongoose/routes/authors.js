const express =  require('express');
const Author = require('../models/Author');
const router = express.Router();

router.get('/authors/', function(req, res) {
  res.send('See all authors');
});

router.post('/authors/create', function(req, res) {
  const { username, email } = req.body; 
  
  Author.create({ username, email }).then( newAuthor => {
    res.status(200).json(newAuthor);
  }).catch( error => res.status(400).json(error) );

});

router.get('/authors/:id', function(req, res) {
  const { id } = req.params;
  res.send(`See author id: ${id}`);
});

module.exports = router;
