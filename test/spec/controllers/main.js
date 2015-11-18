'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('blackjackApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a deck of cards', function () {
    expect(MainCtrl.deck.length).toBe(52);

  });
});
