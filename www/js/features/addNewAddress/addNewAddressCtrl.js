angular.module('addressApp').controller('newAddressCtrl', function ($stateParams, $location, userService, addressService, tokenService) {

  var newAddressCtrl     = this;
  newAddressCtrl.loading = true;
  newAddressCtrl.error   = false;

  newAddressCtrl.getUserData = function () {
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      newAddressCtrl.loading = false;
    })
  };

  newAddressCtrl.getUserData();

  newAddressCtrl.newAddress = {
    UserId: $stateParams.id
  };

  newAddressCtrl.createNewAddress = function (isValid) {
    console.log('isValid', isValid);
    if (!isValid) {
      newAddressCtrl.error = true;
      return false;
    } else {
      addressService.createAddress(newAddressCtrl.newAddress).then(function (response) {
        console.log('new address response -->', response);
        if (response.message === 'Address Created') {
          $location.path('/user/' + $stateParams.id);
        }
      })
    }
  };

  newAddressCtrl.logOut = function () {
    tokenService.removeToken();
    $location.path('/');
  };


}); // END CTRL //