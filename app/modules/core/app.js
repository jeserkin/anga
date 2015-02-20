'use strict';

angular
  .module('anga', [
    'ngResource',
    'ngRoute',

    'anga.config',
    'anga.auth',

    'templates-main',

    'anga.layout',
    'anga.samples'
  ]);

angular.module('anga')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/core/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('anga')
  .controller('MainCtrl', function ($scope, AuthService) {
    $scope.session = AuthService.getAuthSession();
  });
