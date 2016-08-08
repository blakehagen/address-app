'use strict';

const userCtrl = require('../user/user.server.controller');

module.exports = (app, passport) => {

  // ==================== //
  // USER SIGN UP ROUTES //
  // =================== //
  app.post('/api/v1/signup', passport.authenticate('local-signup', {
      successRedirect: '/registerSuccess',
      failureRedirect: '/registerFailure'
    })
  );

  // USER SIGN UP FAILURE ROUTE //
  app.get('/registerFailure', userCtrl.signupFailure);

  // USER SIGN UP SUCCESS ROUTE //
  app.get('/registerSuccess', userCtrl.signupSuccess);


// ================== //
// USER LOGIN ROUTES //
// ================= //
  app.post('/api/v1/login', passport.authenticate('local-login', {
      successRedirect: '/loginSuccess',
      failureRedirect: '/loginFailure'
    })
  );

// USER SIGN UP FAILURE ROUTE //
  app.get('/loginFailure', userCtrl.loginFailure);

// USER SIGN UP SUCCESS ROUTE //
  app.get('/loginSuccess', userCtrl.loginSuccess);

};


