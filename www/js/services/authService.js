angular.module('addressApp').service('authService', function ($http, API) {

  this.testAPI = function () {
    return $http({
      method: 'GET',
      url: '/api/v1/test'
    }).then(function (response) {
      return response;
    })
  };

  this.signup = function (data) {
    return $http({
      method: 'POST',
      url: API.url + 'signup',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response;
    })
  };



}); // END SERVICE //