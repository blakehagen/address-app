angular.module('addressApp').service('authService', function ($http) {

  this.testAPI = function () {
    return $http({
      method: 'GET',
      url: '/api/v1/test'
    }).then(function (response) {
      return response;
    })
  };

}); // END SERVICE //