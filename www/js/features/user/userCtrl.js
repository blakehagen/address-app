angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  var userCtrl = this;

  userCtrl.loading = true;
  userCtrl.edit    = false;

  userCtrl.getUserData = function () {

    userService.getUserById($stateParams.id).then(function (response) {
      console.log('response', response);
      userCtrl.userData = response;
      userCtrl.loading  = false;
      if (!userCtrl.userData.Address || !userCtrl.userData.Address.address1) {
        userCtrl.edit = true;
      }

      userCtrl.localStorage = $window.localStorage;
    })
  };

  userCtrl.getUserData();

  // userCtrl.getProtectedTest = function () {
  //   authService.getProtected().then(function (response) {
  //     console.log('protected route response::::: ', response);
  //   })
  // };
  //
  // userCtrl.getProtectedTest();


  userCtrl.logOut = function () {
    tokenService.removeToken();
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
  };


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