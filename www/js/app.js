// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var simpleApp = angular.module('simpleApp', [
  'ionic',
  'ion-floating-menu',
  'ngMessages',
  'ngAnimate',
  'ngSanitize',
  'restangular',
  'jett.ionic.filter.bar',
  'ngCordova',
  'cloudinary',
  'ngFileUpload',

])

simpleApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

simpleApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login', templateUrl: 'templates/login.html', controller: 'signInCrtl as vm'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerCrtl as vm'

    })

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/shell.html',
      controller: 'shellCrtl as vm'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCrtl as vm'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
