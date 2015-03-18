'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('anga'));

  var CoreCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope    = $rootScope.$new();
    CoreCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('shouldn\'t have anything defined in scope', function() {
    expect(scope.something).toBeUndefined();
  });
});
