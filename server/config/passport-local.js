'use strict';

const LocalStrategy = require('passport-local').Strategy;
const models        = require('../models/index');

module.exports = (passport) => {

  // SERIALIZE USER //
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // DESERIALIZE USER //
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // ======= //
  // SIGN UP //
  // ======= //
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback: true}, (req, email, password, done) => {

    process.nextTick(() => {
      console.log('email ================>', email);


      models.User.isEmailUnique(email).then(() => {
        console.log('success');
        models.User.create(req.body).then(user => {
          return done(null, user);
        })
      }).catch(err => {
        console.log('err', err);
        return done(null, false);
      });
    })
  }));


  // ===== //
  // LOGIN //
  // ===== //
  passport.use('local-login', new LocalStrategy((username, password, done) => {

    process.nextTick(() => {

      User.findOne({'username': username}, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }

        if (!user.validPassword(password)) {
          return done(null, false);
        }

        return done(null, user);
      });
    })
  }));

};
