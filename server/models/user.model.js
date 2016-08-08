'use strict';

const BPromise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  let User;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true
    // classMethods: {
    //   generateHash: function (password) {
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    //   },
    //   validPassword: function (password) {
    //     return bcrypt.compareSync(password, this.password);
    //   }
    // }
  });
  return User;
};