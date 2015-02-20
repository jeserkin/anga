'use strict';

angular.module('anga.auth', [])
  .config(function ($httpProvider) {
    function CasLogin($q, $rootScope) {
      return {
        'responseError': function (rejection) {
          if (rejection.status === 401) {
            $rootScope.$emit('CAS_LOGIN');
          }
          return $q.reject(rejection);
        }
      };
    }

    $httpProvider.interceptors.push(CasLogin);
  });

angular.module('anga.auth')
  .service('AuthService', function ($window, $resource, config) {
    this.authenticate = function () {
      $window.location.href = config.api + '/api/v1/security/login?url=' + $window.location.href;
    };

    this.getAuthSession = function (cb) {
      return $resource(config.api + '/api/v1/security/session').get({}, cb);
    };
  });

angular.module('anga.auth')
  .filter('user', function () {
    return function (authSession) {
      if (_.exists(authSession)) {
        return authSession.name;
      }
    };
  });

angular.module('anga.auth')
  .filter('username', function () {
    return function (authSession) {
      if (_.exists(authSession) && _.exists(authSession.authUser)) {
        return authSession.authUser.firstName + ' ' + authSession.authUser.lastName;
      }
    };
  });
