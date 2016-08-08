angular.module('addressApp').controller('userCtrl', function ($rootScope) {

  var userCtrl = this;

  userCtrl.user = $rootScope.user;

  userCtrl.test = 'user main page after login';

}); // END CTRL //