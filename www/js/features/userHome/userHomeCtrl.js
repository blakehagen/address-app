angular.module('addressApp').controller('userHomeCtrl', function ($location, $rootScope, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  $rootScope.logOut = function () {
    tokenService.removeToken();
    $location.path('/');
  };

  var userCtrl = this;

  userCtrl.loading = true;
  userCtrl.edit    = false;
  userCtrl.error   = false;


  userCtrl.getUserData = function () {
    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      if (!response.Address) {
        $location.path('/user/' + response.id + '/address');
        userCtrl.loading = false;
      } else {
        userCtrl.userData = response;
        userCtrl.loading  = false;
      }
    })
  };

  userCtrl.getUserData();

  userCtrl.logOut = function () {
    tokenService.removeToken();
    $location.path('/');
  };

  userCtrl.editMyAddress = function () {
    userCtrl.edit           = true;
    userCtrl.updatedAddress = {
      UserId: userCtrl.userData.id,
      addressId: userCtrl.userData.Address.id,
      address1: userCtrl.userData.Address.address1,
      address2: userCtrl.userData.Address.address2,
      apt_suite: userCtrl.userData.Address.apt_suite,
      city: userCtrl.userData.Address.city,
      state_province: userCtrl.userData.Address.state_province,
      postal_code: userCtrl.userData.Address.postal_code,
      country: userCtrl.userData.Address.country
    };
  };

  userCtrl.cancelEdit = function () {
    userCtrl.edit           = false;
    userCtrl.updatedAddress = null;
    userCtrl.error          = false;
  };

  userCtrl.saveAddressEdit = function (isValid) {
    if (!isValid) {
      userCtrl.error = true;
      return false;
    } else {
      userCtrl.error = false;
      addressService.updateAddress(userCtrl.updatedAddress).then(function (response) {
        console.log('response --> update address -->', response);
        userCtrl.userData       = response;
        userCtrl.updatedAddress = null;
        userCtrl.edit           = false;
      })
    }
  };

  userCtrl.goToConnect = function () {
    $location.path('/user/' + $stateParams.id + '/connect');
  };

  // userCtrl.onSwipeRight = function () {
  //   userCtrl.goToConnect();
  // };


  // GET CONTACTS ON DEVICE === TESTING //
  $ionicPlatform.ready(function () {

    userCtrl.getContacts = function () {
      userCtrl.phoneContacts = [];

      function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
          var contact = contacts[i];
          userCtrl.phoneContacts.push(contact);
        }
      }

      function onError(contactError) {
        alert(contactError);
      }

      var options      = {};
      options.multiple = true;

      $cordovaContacts.find(options).then(onSuccess, onError);
    };

  });


}); // END CTRL //