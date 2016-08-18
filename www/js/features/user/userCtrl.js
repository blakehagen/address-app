angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, userService, addressService, authService, $window) {

  var userCtrl = this;

  userCtrl.loading = true;
  userCtrl.edit    = false;

  userCtrl.getUserData = function () {

    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.userData = response;
      userCtrl.loading  = false;
      if (!userCtrl.userData.Address.address1) {
        userCtrl.edit = true;
      }

      userCtrl.localStorage = $window.localStorage;


    })
  };

  userCtrl.getUserData();



  userCtrl.toggleMenu = function () {
    $location.path('/');
  };

  userCtrl.editMyAddress = function () {
    userCtrl.edit = true;
  };

  userCtrl.cancelEdit = function () {
    userCtrl.edit = false;
  };

  userCtrl.saveAddress = function () {
    addressService.updateAddress(userCtrl.userData.Address).then(function (response) {
      console.log('response --> update address -->', response);
      userCtrl.edit = false;
    })
  }


}); // END CTRL //