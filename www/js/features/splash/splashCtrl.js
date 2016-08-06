angular.module('addressApp').controller('splashCtrl', function ($location, authService) {

  var splashCtrl = this;

  splashCtrl.login = function () {
    $location.path('/user')
  };

  // splashCtrl.testAPI = function () {
  //   authService.testAPI().then(function (response) {
  //     console.log('response', response);
  //   })
  // };

}); // END CTRL