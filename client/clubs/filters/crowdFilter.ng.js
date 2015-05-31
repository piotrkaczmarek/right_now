(function() {
  'use strict';

  angular
    .module('rightNow')
    .filter('crowdFilter', CrowdFilter);

  CrowdFilter.$inject = [];

  function CrowdFilter() {
    var ranges = {
      10: 'empty',
      30: 'almost empty',
      60: 'moderate',
      80: 'slightly crowded',
      Infinity: 'overcrowded'
    };
    var filter = function(value) {
      for(var range in ranges) {
        if(Number(value) <= Number(range)) {
          return ranges[range];
        }
      }
    };
    return filter;
  }
})();
