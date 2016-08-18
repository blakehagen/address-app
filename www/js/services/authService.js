angular.module('addressApp').service('authService', function ($http, $window, API) {

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

  this.signup = function (data) {
    return $http({
      method: 'POST',
      url: API.SERVER_HEROKU + 'signup',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    })
  };

  this.login = function (data) {
    return $http({
      method: 'POST',
      url: API.SERVER_HEROKU + 'login',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    })
  };

}); // END SERVICE //