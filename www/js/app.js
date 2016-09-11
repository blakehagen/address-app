angular.module('addressApp', ['ionic', 'ngCordova'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('splash', {
        url: '/',
        templateUrl: './js/features/splash/splashTmpl.html',
        controller: 'splashCtrl as splashCtrl'
      });

    $stateProvider
      .state('userHome', {
        url: '/user/:id',
        templateUrl: './js/features/userHome/userHomeTmpl.html',
        controller: 'userHomeCtrl as userCtrl'
      });

    $stateProvider
      .state('editAddress', {
        url: '/user/:id/edit',
        templateUrl: './js/features/editAddress/editAddressTmpl.html',
        controller: 'editAddressCtrl as editAddressCtrl'
      });

    $stateProvider
      .state('addNewAddress', {
        url: '/user/:id/address',
        templateUrl: './js/features/addNewAddress/addNewAddressTmpl.html',
        controller: 'newAddressCtrl as newAddressCtrl'
      });

    $stateProvider
      .state('connect', {
        url: '/user/:id/connect',
        templateUrl: './js/features/connect/connectTmpl.html',
        controller: 'connectCtrl as connectCtrl'
      });

    $urlRouterProvider
      .otherwise('/');

    $httpProvider.interceptors.push('authInterceptor');

  })

  .run(function ($ionicPlatform, $cordovaContacts) {
    $ionicPlatform.ready(function () {

      // ionic.Platform.fullScreen(true, true);
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false)
  });

