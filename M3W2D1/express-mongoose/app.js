const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose"); // We added mongoose

const app = express();
const PORT = 5020;

app.use(logger('dev')); // The logger function
app.use(express.json()); // Help us to transfer JSON data between requests

app.get('/', function(req, res) {
  res.json({ 'page': 'home' });
});

app.use('/', [
  require('./routes/posts'),
  require('./routes/authors')
]);


app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

mongoose
  .connect('mongodb://localhost:27017/ironhack-express-mongoose-lesson')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

