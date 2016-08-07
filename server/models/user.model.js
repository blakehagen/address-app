'use strict';

const BPromise = require('bluebird');

module.exports = (sequelize, DataTypes) => {
  let User;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true,
    classMethods: {
      isEmailUnique(email) {
        console.log('email', email);
        return User.find({
          where: {
            email: email
          }
        })
          .then(user => {
            console.log('user', user);
            if (user) {
              return BPromise.reject(new Error('Account already registered with that email'));
            }
          });
      },
    }
  });
  return User;
};