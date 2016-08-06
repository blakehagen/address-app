angular.module('addressApp').controller('splashCtrl', function ($rootScope, $state, $location, authService) {

  var splashCtrl = this;

  $rootScope.state = $state.current.name;
  console.log('$rootScope.state', $rootScope.state);

  splashCtrl.login = function () {
    $location.path('/user')
  };

  // splashCtrl.testAPI = function () {
  //   authService.testAPI().then(function (response) {
  //     console.log('response', response);
  //   })
  // };

}); // END CTRL