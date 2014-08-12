angular.module('anga.auth', ['ngRoute', 'ngResource', 'anga.config'])

    .config(function($httpProvider) {
      $httpProvider.interceptors.push(['$q', '$rootScope', function($q, $rootScope) {
        return {
          'responseError': function(rejection) {
            if (rejection.status === 401) {
              $rootScope.$emit('CAS_LOGIN');
            }
            return $q.reject(rejection);
          }
        };
      }]);
    })

    .service('AuthService', function($window, $http, $resource, $location, config) {
      this.authenticate = function() {
        $window.location.href = config.api + '/api/v1/security/login?url=' + $window.location.href;
      };

      this.getAuthSession = function(cb) {
        return $resource(config.api + '/api/v1/security/session').get({}, cb);
      };

    })

    .filter('user', function(_) {
      return function(authSession) {
        if (_.exists(authSession)) {
          return authSession.name;
        }
      };
    })

    .filter('username', function(_) {
      return function(authSession) {
        if (_.exists(authSession) && _.exists(authSession.authUser)) {
          return authSession.authUser.firstName + ' ' + authSession.authUser.lastName;
        }
      };
    });