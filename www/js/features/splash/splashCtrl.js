angular.module('addressApp').controller('splashCtrl', function ($location) {
  var splashCtrl = this;

  splashCtrl.test = 'this is the splash controller. yay.'

  splashCtrl.login = function () {
    $location.path('/user')

  }

}); // END CTRL