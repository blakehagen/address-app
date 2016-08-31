angular.module('addressApp').controller('connectCtrl', function ($location, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  var connectCtrl = this;

  connectCtrl.goToUserHome = function () {
    $location.path('/user/' + $stateParams.id );
  };


}); // END CTRL //