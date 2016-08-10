angular.module('addressApp').controller('userCtrl', function ($stateParams, userService) {

  var userCtrl = this;
  userCtrl.test = 'user main page after login';

  userCtrl.getUserData = function () {
    console.log('$stateParams.id', $stateParams.id);
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.name = response.firstName;
    })
  };

  userCtrl.getUserData();

}); // END CTRL //