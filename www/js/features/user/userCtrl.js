angular.module('addressApp').controller('userCtrl', function ($rootScope, $state) {

  $rootScope.state = $state.current.name;
  console.log('$rootScope.state', $rootScope.state);

  var userCtrl = this;

  userCtrl.test = 'user main page after login';

}); // END CTRL //