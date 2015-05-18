/*jshint expr: true*/
describe('eha.online-badge.service', function() {
  'use strict';

  var service;

  beforeEach(module('eha.online-badge.service'));
  beforeEach(inject(function(_ehaOnlineBadgeService_) {
    service = _ehaOnlineBadgeService_;
  }));

  describe('Public API', function() {
    it('should expose a method', function() {
      expect(service.method).to.be.defined;
    });
  });

});
