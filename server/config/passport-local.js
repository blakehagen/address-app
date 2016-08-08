'use strict';

const LocalStrategy = require('passport-local').Strategy;
const models        = require('../models/index');
const bcrypt = require('bcrypt');

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

          let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
          };


          models.User.create(newUser).then(user => {
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
  passport.use('local-login', new LocalStrategy({
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
        if (user == null) {
          return done(null, false)
        }

        if (user.password === password) {
          return done(null, user)
        }
        return done(null, false)
      }).catch(err => {
        return done(err);
      })
    })
  }));

};
