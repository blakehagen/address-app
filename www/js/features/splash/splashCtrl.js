angular.module('addressApp').controller('splashCtrl', function ($location, $timeout, authService, tokenService) {

  var splashCtrl = this;

  splashCtrl.loading           = false;
  splashCtrl.err               = false;
  splashCtrl.loginView         = true;
  splashCtrl.createAccountView = false;

  splashCtrl.toggleEntryBox = function () {
    splashCtrl.loginView         = !splashCtrl.loginView;
    splashCtrl.createAccountView = !splashCtrl.createAccountView;
  };

  // TODO handle sign up error and loading spinner
  splashCtrl.signup = function (data) {
    authService.signup(data).then(function (response) {
      splashCtrl.data = {};
      console.log('response', response);
      $location.path('/user/' + response.user.id)
    });
  };

  splashCtrl.login = function (data) {
    splashCtrl.loading = true;

    authService.login(data).then(function (response) {

      console.log('response', response);
      if (response.status === 500 || response.status === -1) {
        splashCtrl.err = true;

        $timeout(function () {
          splashCtrl.closeErr();
          splashCtrl.loading = false;
        }, 1500);
        return;
      }
      tokenService.setToken(response.token);
      splashCtrl.data = {};
      $location.path('/user/' + response.user.id);
      splashCtrl.loading = false;
    });

  };


  // CLOSE ERR //
  splashCtrl.closeErr = function () {
    splashCtrl.err = false;
  }


}); // END CTRL