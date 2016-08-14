angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, userService) {

  var userCtrl = this;

  userCtrl.loading = true;
  userCtrl.edit = false;

  userCtrl.getUserData = function () {
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.userData = response;
      userCtrl.loading = false;
      if(!userCtrl.userData.Address.address1){
        userCtrl.edit = true;
      }
    })
  };

  userCtrl.getUserData();

  userCtrl.toggleMenu = function () {
    $location.path('/');
  };

  userCtrl.editMyAddress = function () {
    userCtrl.edit = true;
    console.log('edit clicked');
  };






}); // END CTRL //