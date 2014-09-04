angular.module('anga.samples', ['ngResource', 'anga.config'])
    .config(function($routeProvider) {
      $routeProvider
          .when('/samples', {
            templateUrl: 'modules/samples/samples.html',
            controller: 'SamplesCtrl'
          });
    })
    .controller('SamplesCtrl', function($scope, $resource, config) {
      $scope.list = $resource(config.api + '/api/v1/questions').query();
    });