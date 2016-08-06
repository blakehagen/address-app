'use strict';

// APP //
const babel       = require('babel-core').transform('code');
const express     = require('./server/config/express.js');
const environment = process.env.NODE_ENV;

// TODO --> add DB - POSTGRES?
// require('./server/config/db.js')();

// PASSPORT //
const passport = require('passport');
require('./server/config/passport-local')(passport); // PASSPORT CONFIG //

// RUN EXPRESS //
const app = express();

// INITIALIZE PASSPORT //
app.use(passport.initialize());
app.use(passport.session());

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
const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log('Check me out on port', port);
});