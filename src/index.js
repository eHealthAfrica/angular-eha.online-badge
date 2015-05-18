;(function() {

  var ngModule = angular.module('eha.online-badge', [
    'eha.online-badge.directive',
    'eha.online-badge.template'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
