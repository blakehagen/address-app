angular.module('addressApp').controller('splashCtrl', function ($location, authService) {

  var splashCtrl = this;

  splashCtrl.loginView         = true;
  splashCtrl.createAccountView = false;

  splashCtrl.toggleEntryBox = function () {
    splashCtrl.loginView         = !splashCtrl.loginView;
    splashCtrl.createAccountView = !splashCtrl.createAccountView;


  }


  splashCtrl.login = function (data) {
    authService.signup(data).then(function (response) {
      console.log('response', response);
      $location.path('/user')
    });
  };

  // splashCtrl.testAPI = function () {
  //   authService.testAPI().then(function (response) {
  //     console.log('response', response);
  //   })
  // };

}); // END CTRL