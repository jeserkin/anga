'use strict';

angular.module('anga.samples', [])
  .config(AngaSamplesConfig);

// @ngInject
function AngaSamplesConfig($routeProvider) {
  $routeProvider
    .when('/samples', {
      templateUrl: 'modules/samples/samples.html',
      controller: 'SamplesCtrl'
    });
}

angular.module('anga.samples')
  .controller('SamplesCtrl', AngaSamplesCtrl);

// @ngInject
function AngaSamplesCtrl($scope, $resource, config) {
  $scope.list = $resource(config.api + '/api/v1/questions').query();
}