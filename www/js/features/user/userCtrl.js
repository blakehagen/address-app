angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, userService) {

  var userCtrl = this;

  userCtrl.loading = true;

  userCtrl.getUserData = function () {
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.userData = response;
      userCtrl.loading = false;
    })
  };

  userCtrl.getUserData();

  userCtrl.toggleMenu = function () {
    $location.path('/');
  }






}); // END CTRL //