angular.module('addressApp').controller('userCtrl', function ($rootScope) {

  var userCtrl = this;

  userCtrl.user = $rootScope.user;
  console.log('userCtrl.user', userCtrl.user);

  userCtrl.test = 'user main page after login';

}); // END CTRL //