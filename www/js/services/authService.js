angular.module('addressApp').service('authService', function ($http, API) {

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