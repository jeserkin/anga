'use strict';

angular.module('anga.samples', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/samples', {
        templateUrl: 'modules/samples/samples.html',
        controller: 'SamplesCtrl'
      });
  });

angular.module('anga.samples')
  .controller('SamplesCtrl', function ($scope, $resource, config) {
    $scope.list = $resource(config.api + '/api/v1/questions').query();
  });
