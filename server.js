'use strict';

// APP //
const babel       = require('babel-core').transform('code');
const express     = require('./server/config/express.js');
const passport    = require('passport');
const environment = process.env.NODE_ENV;

// RUN EXPRESS //
const app = express();

// INITIALIZE PASSPORT //
app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport-local')(passport); // PASSPORT CONFIG //

// ====== //
// ROUTES //
// ====== //
require('./server/features/auth/auth.routes')(app, passport);


// TEST  //
app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});

// ==== //
// PORT //
// ==== //
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log('Check me out on port', port);
});