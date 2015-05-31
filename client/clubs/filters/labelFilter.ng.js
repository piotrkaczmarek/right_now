(function() {
  'use strict';

  angular
    .module('rightNow')
    .filter('labelFilter', LabelFilter);

  LabelFilter.$inject = [];

  function LabelFilter() {
    var filter = function(value, ranges) {
      for(var range in ranges) {
        if(Number(value) <= Number(range)) {
          return ranges[range];
        }
      }
    };
    return filter;
  }
})();
