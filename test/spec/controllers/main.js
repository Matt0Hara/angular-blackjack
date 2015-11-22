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

  it('should contain an array of card objects', function () {
    for(var i=0;i<MainCtrl.deck;i++) {
      expect(MainCtrl.deck[i].card).not.toEqual(null);
      expect(MainCtrl.deck[i].suite).not.toEqual(null);
      expect(MainCtrl.deck[i].value).not.toEqual(null);
    }
  });

  it('should create a computer player', function () {
    expect(MainCtrl.compPlayer).toBeDefined();
    // verify constructor
    expect(MainCtrl.compPlayer).not.toEqual(null);
  });

  it('should create a human player', function () {
    expect(MainCtrl.humanPlayer).toBeDefined();
    //verify constructor
    expect(MainCtrl.humanPlayer).not.toEqual(null);
  });

  it('should create a human player with a hand', function () {
    expect(humanPlayer.hand).not.toEqual(null);
    expect(humanPlayer.hand.length).toBe(2);
    expect(humanPlayer.hand[0]).not.toEqual(null);
    expect(humanPlayer.hand[1]).not.toEqual(null);
    //expect the two cards' values to be integers
  });

  it('should create a computer player with a hand', function () {
    expect(compPlayer.hand).not.toEqual(null);
    expect(compPlayer.hand[0]).not.toEqual(null);
    expect(compPlayer.hand[1]).not.toEqual(null);
    //expect the two cards' values to be integers
  });

  it('should deal cards to a player on their turn', function () {
    expect(humanPlayer.hand.length).toBe(2);
    expect(MainCtrl.deck.length()).toBe(48);
    humanPlayer.deal();
    expect(humanPlayer.hand.length).toBe(3);
    expect(MainCtrl.deck.length).toBe(47);
  });
});
