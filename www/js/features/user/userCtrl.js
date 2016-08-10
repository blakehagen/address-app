angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, userService) {

  var userCtrl = this;

  userCtrl.loading = true;

  userCtrl.getUserData = function () {
    console.log('$stateParams.id', $stateParams.id);
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.name = response.firstName;
      userCtrl.loading = false;
    })
  };

  userCtrl.getUserData();

  userCtrl.toggleMenu = function () {
    $location.path('/');

  }




}); // END CTRL //