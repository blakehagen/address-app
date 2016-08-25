angular.module('addressApp').service('userService', function ($http, API) {

  this.getUserById = function (id) {
    return $http({
      method: 'GET',
      url: API.SERVER_HEROKU + 'user/' + id
    }).then(function (response) {
      return response.data;
    }).catch(function (err) {
      console.log('err', err);
      return err;
    })
  }


}); // END SERVICE //