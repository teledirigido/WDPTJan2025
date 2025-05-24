const express = require('express');
const logger = require('morgan');

const app = express();

app.use( logger('dev') );
app.use( express.static('public') );

function myMiddleware(req, res, next) {
  console.log(req.query);
  console.log('Hi I am a middleware, I do things....');
  next();
}

app.use(myMiddleware);

app.get('/', function(req, res) {
  const myResponse = {
    title: 'My page title',
    description: 'My page description, hello everyone',
    tasks: ['learn express', 'have 7 coffees', 'have a rest'],
    status: 200
  }

  console.log(req.params);

  res.json(myResponse);
})

app.get('/users/:userId/edit/:action', function(req, res) {
  const { userId, action } = req.params;
  console.log(req.params);
  res.json({ id: userId, action: action });
  // fetch data with username and then use res.json with the result
});

app.get('/posts', function(req,res) { 
  res.send('Posts route here');
  // list all posts
});

app.get('/posts/:id', function(req,res) { 
  // list single post with :id
});

http://localhost:3000/search?artist=shakira&album=donde%20estan%20los%20ladrones
app.get('/search', function(req, res) {
 const { artist, album } = req.query;
 res.json({
  artist: artist,
  album: album,
  status: true
 });
});

// /track/6RyC5X1YGBBvNP0vKYYuvI?si=14a9385011244240
app.get('/track/:trackId', function(req, res) {
  const { trackId } = req.params;
  const { si } = req.query;
  const response = {
    'track-id': trackId,
    'si': si
  };
  res.json(response);
});

// Creating a view
app.get('/cats', function(req, res) {
  res.sendFile(__dirname + '/views/cats.html');
})

app.get('/search-cat', function(req, res) {
  const { catName, catBirthday } = req.query;
  res.json({
    name: catName,
    birthday: catBirthday
  });
});

app.listen(3000, () => {
  console.log('My app is running on http://localhost:3000');
});