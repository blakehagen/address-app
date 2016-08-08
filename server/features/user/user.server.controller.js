'use strict';

module.exports = {

  signupSuccess: (req, res) => {
    res.status(200).json({user: req.user, message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  },

  loginSuccess: (req, res) => {
    res.status(200).json({user: req.user, message: 'Success'});
  },

  loginFailure: (req, res) => {
    res.send('Login Failed');
  }


};