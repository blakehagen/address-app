angular.module('addressApp').service('tokenService', function ($window) {

  var storage = $window.localStorage;
  var cachedToken;

  this.setToken = function (token) {
    cachedToken = token;
    storage.setItem('userToken', token);
  };

  this.getToken = function () {
    if (!cachedToken) {
      cachedToken = storage.getItem('userToken');
    }
    return cachedToken;
  };

  this.isAuthenticated = function () {
    return !!getToken();
  };

});