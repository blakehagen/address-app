angular.module('addressApp').controller('splashCtrl', function ($rootScope, $location, authService) {

  var splashCtrl = this;

  splashCtrl.loginView         = true;
  splashCtrl.createAccountView = false;

  splashCtrl.toggleEntryBox = function () {
    splashCtrl.loginView         = !splashCtrl.loginView;
    splashCtrl.createAccountView = !splashCtrl.createAccountView;
  };

  splashCtrl.signup = function (data) {
    authService.signup(data).then(function (response) {
      console.log('response', response);
      $location.path('/user/' + response.id)
    });
  };


  // splashCtrl.login = function (data) {
  //   authService.login(data).then(function (response) {
  //     console.log('response', response);
  //     $location.path('/user')
  //   });
  // };

  splashCtrl.testAPI = function () {
    authService.testAPI().then(function (response) {
      console.log('response', response);
      $rootScope.user = response;
    })
  };

}); // END CTRL