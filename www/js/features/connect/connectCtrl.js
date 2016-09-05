angular.module('addressApp').controller('connectCtrl', function ($rootScope, $state, $location, $stateParams, $window, $cordovaContacts, $ionicPlatform, userService, addressService, authService, tokenService) {

  var connectCtrl = this;

  connectCtrl.goToUserHome = function () {
    $location.path('/user/' + $stateParams.id );
  };


}); // END CTRL //