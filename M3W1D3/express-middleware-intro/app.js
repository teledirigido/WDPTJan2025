const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = 3000;

app.use(logger('dev'));

// Middleware to check for a user
function checkUser (req, res, next) {
  const { user } = req.params;
  if ( user === 'admin' ) {
    req.secretKey = '1233457436';
  } else {
    req.secretKey = false;
  }
  next();
}

// Middleware placed only for /user/:user route
app.use('/users/:user', checkUser, function (req, res) {
  const { user } = req.params;
  // console.log(req.secretKey)
  const responseJSON = {
    username: user,
    secretKey: req.secretKey
  }
  res.json(responseJSON);
});



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});