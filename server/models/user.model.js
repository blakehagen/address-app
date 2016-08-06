'use strict';

const BPromise = require('bluebird');

module.exports = (sequelize, DataTypes) => {
  let User;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    classMethods: {
      isEmailUnique(email) {
        return User.find({
          where: {
            email: email
          }
        })
          .then(user => {
            if (user) {
              return BPromise.reject(new Error('Account already registered with that email'));
            }
          });
      },
    }
  });
  return User;
};