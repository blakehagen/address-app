angular.module('addressApp').service('authService', function ($http, $window, API) {

  this.signup = function (data) {
    return $http({
      method: 'POST',
      // url: API.SERVER_HEROKU + 'signup',
      url: API.SERVER_LOCAL + 'signup',
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
      // url: API.SERVER_HEROKU + 'login',
      url: API.SERVER_LOCAL + 'login',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    })
  };

  this.getProtected = function () {
    return $http({
      method: 'GET',
      // url: API.SERVER_HEROKU + 'protected',
      url: API.SERVER_LOCAL + 'protected',
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error;
    })
  };

}); // END SERVICE //