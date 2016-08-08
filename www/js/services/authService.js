angular.module('addressApp').service('authService', function ($http, API) {

  this.testAPI = function () {
    return $http({
      method: 'GET',
      url: API.SERVER_LOCAL + 'test'
    }).then(function (response) {
      return response;
    })
  };

  this.signup = function (data) {
    return $http({
      method: 'POST',
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
      url: API.SERVER_LOCAL + 'login',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    })
  };



}); // END SERVICE //