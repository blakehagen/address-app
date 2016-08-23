angular.module('addressApp').controller('userCtrl', function ($location, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  var userCtrl = this;

  console.log('$cordovaContacts on userCtrl: ', $cordovaContacts);

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

  userCtrl.getProtectedTest = function () {
    authService.getProtected().then(function (response) {
      console.log('protected route response::::: ', response);
    })
  };

  userCtrl.getProtectedTest();


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

  $ionicPlatform.ready(function() {

    // This function can take some time  so be patient
    userCtrl.getAllContacts = function() {
      console.log('Dohvati');
      $cordovaContacts.find({filter : '', multiple: true, desiredFields: [ 'displayName']}).then(function(allContacts) { //replace 'Robert' with '' if you want to return all contacts with .find()
        userCtrl.contacts = allContacts;
        console.log('allContacts', JSON.stringify(allContacts));
      });
    };

    userCtrl.getAllContacts();


  });


}); // END CTRL //