angular.module('addressApp').controller('connectCtrl', function ($rootScope, $state, $location, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  var connectCtrl = this;

  // GET CONTACTS ON DEVICE === TESTING //
  $ionicPlatform.ready(function () {

    connectCtrl.getContacts = function () {
      connectCtrl.phoneContacts = [];

      function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
          var contact = contacts[i];
          connectCtrl.phoneContacts.push(contact);
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