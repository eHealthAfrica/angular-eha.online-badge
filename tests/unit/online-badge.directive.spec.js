/*jshint expr: true*/
describe('eha.online-badge.directive', function() {
  'use strict';

  beforeEach(module('eha.online-badge.template'));
  beforeEach(module('eha.online-badge.directive'));

  var scope;
  var element;
  var $window;
  var $timeout;

  beforeEach(inject(function($rootScope, $compile, _$window_, _$timeout_) {
    $window = _$window_;
    $timeout = _$timeout_;
    sinon.spy($window, 'addEventListener');

    element = '<eha-online-badge></eha-online-badge>';
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should add event listeners', function() {
    expect($window.addEventListener).to.have.been.called.twice;
  });

  // TODO: test event handlers
  xit('should respond to online events', function() {
    angular.element($window).triggerHandler('online');
    $timeout.flush();
    expect(scope.online).to.be.true;
  });

  afterEach(function() {
    $window.addEventListener.restore();
  });
});
