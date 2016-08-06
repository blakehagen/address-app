'use strict';

const models = require('../../models/index');

module.exports = {

  signupSuccess: (req, res) => {
    res.status(200).json(req.user);
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};