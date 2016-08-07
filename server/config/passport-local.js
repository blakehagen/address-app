'use strict';

const LocalStrategy = require('passport-local').Strategy;
const models        = require('../models/index');

module.exports = (passport) => {

  // SERIALIZE USER //
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  //
  // DESERIALIZE USER //
  passport.deserializeUser((id, done) => {
    models.User.findOne({
      where: {
        'id': id
      }
    }).then(user => {
      done(null, user)
    })
  });

  // ======= //
  // SIGN UP //
  // ======= //
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {

    process.nextTick(() => {

      models.User.findOne({
        where: {
          'email': email
        }
      }).then(user => {
        if (user) {
          return done(null, false)
        } else {
          models.User.create(req.body).then(user => {
            return done(null, user);
          })
        }
      }).catch(err => {
        return done(err);
      })
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
