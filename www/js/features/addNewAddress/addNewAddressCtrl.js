angular.module('addressApp').controller('newAddressCtrl', function ($stateParams, $location, userService, addressService) {

  var newAddressCtrl     = this;
  newAddressCtrl.loading = true;

  newAddressCtrl.getUserData = function () {
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      newAddressCtrl.loading  = false;
    })
  };

  newAddressCtrl.getUserData();

  newAddressCtrl.newAddress = {
    UserId: $stateParams.id
  };

  newAddressCtrl.createNewAddress = function () {
    addressService.createAddress(newAddressCtrl.newAddress).then(function (response) {
      console.log('new address response -->', response);
      if(response.message === 'Address Created'){
        $location.path('/user/' + $stateParams.id);
      }

    })
  };


}); // END CTRL //