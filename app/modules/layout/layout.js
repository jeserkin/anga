'use strict';

angular.module('anga.layout', [])
  .controller('HeaderCtrl', AngaLayoutHeaderCtrl);

// @ngInject
function AngaLayoutHeaderCtrl($scope, $rootScope, AuthService, $window, config) {
  $rootScope.$on('CAS_LOGIN', function() {
    AuthService.authenticate();
  });

  $rootScope.session = AuthService.getAuthSession();

  $scope.auth = function(){
    AuthService.authenticate();
  };

  $scope.url = $window.location.href;

  $scope.title = config.title;
  $scope.api = config.api;
}

angular.module('anga.layout')
  .directive('angaActiveLink', AngaLayoutActiveLinkDirective);

// @ngInject
function AngaLayoutActiveLinkDirective($location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var linkPath = attrs.href;
      scope.$on('$routeChangeSuccess', function() {
        if ($location.path().substring(1) === linkPath.substring(1)) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}