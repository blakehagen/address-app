angular.module('addressApp').controller('splashCtrl', function ($location, $timeout, authService) {

  var splashCtrl = this;

  splashCtrl.loading           = false;
  splashCtrl.err               = false;
  splashCtrl.loginView         = true;
  splashCtrl.createAccountView = false;

  splashCtrl.toggleEntryBox = function () {
    splashCtrl.loginView         = !splashCtrl.loginView;
    splashCtrl.createAccountView = !splashCtrl.createAccountView;
  };

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
      splashCtrl.data = {};
      console.log('response', response);
      if (response === 'Login Failed' || !response.data) {
        splashCtrl.err = true;

        $timeout(function () {
          splashCtrl.closeErr();
          splashCtrl.loading = false;
        }, 1500);
        return;
      }

      $location.path('/user/' + response.user.id);
      splashCtrl.loading = false;
    });
  };


  // CLOSE ERR //
  splashCtrl.closeErr = function () {
    splashCtrl.err = false;
  }


}); // END CTRL