angular.module('addressApp').controller('splashCtrl', function ($location, $timeout, authService, tokenService) {

  var splashCtrl = this;

  splashCtrl.loading           = false;
  splashCtrl.err               = false;
  splashCtrl.loginView         = true;
  splashCtrl.createAccountView = false;

  // TOGGLE LOGIN / REGISTER BOX //
  splashCtrl.toggleEntryBox = function () {
    splashCtrl.loginView         = !splashCtrl.loginView;
    splashCtrl.createAccountView = !splashCtrl.createAccountView;
  };

  // USER REGISTER //
  splashCtrl.submitRegistrationForm = function (isValid, data) {
    splashCtrl.loading = true;

    if (!isValid) {
      splashCtrl.err             = true;
      splashCtrl.registerMessage = 'Please complete registration form';
      $timeout(function () {
        splashCtrl.closeErr();
        splashCtrl.loading = false;
      }, 2000);
      return false;
    } else if (data.pw2 !== data.password) {
      splashCtrl.err             = true;
      splashCtrl.registerMessage = 'Password does not match';
      splashCtrl.data.password   = '';
      splashCtrl.data.pw2        = '';

      $timeout(function () {
        splashCtrl.closeErr();
        splashCtrl.loading = false;
      }, 2000);
      return false;
    }

    authService.signup(data).then(function (response) {
      splashCtrl.data = {};

      if (response.message !== 'Registration Success') {
        splashCtrl.err             = true;
        splashCtrl.registerMessage = 'Registration Error';

        $timeout(function () {
          splashCtrl.closeErr();
          splashCtrl.loading = false;
        }, 2000);
        return false;
      } else {
        tokenService.setToken(response.token);
        $location.path('/user/' + response.user.id + '/address');
        splashCtrl.loading = false;
      }
    });
  };

  // USER LOGIN //
  splashCtrl.submitLoginForm = function (isValid, data) {
    splashCtrl.loading = true;

    if (!isValid) {
      splashCtrl.err           = true;
      splashCtrl.data = {};
      $timeout(function () {
        splashCtrl.closeErr();
        splashCtrl.loading = false;
      }, 2000);
      return false;
    }

    authService.login(data).then(function (response) {
      splashCtrl.data.password = '';

      console.log('response', response);
      if (response.message !== 'Login Success') {
        splashCtrl.err = true;

        $timeout(function () {
          splashCtrl.closeErr();
          splashCtrl.loading = false;
        }, 2000);
        return false;
      } else {
        tokenService.setToken(response.token);
        $location.path('/user/' + response.user.id);
        splashCtrl.loading = false;
      }
    });
  };

  // CLOSE ERR //
  splashCtrl.closeErr = function () {
    splashCtrl.err = false;
  }

}); // END CTRL