(function() {
  'use strict';

  angular
    .module('rightNow')
    .value('crowdLabels', {
      5: 'empty',
      15: 'almost empty',
      45: 'moderate',
      60: 'decent',
      80: 'crowded',
      Infinity: 'overcrowded'
    });
})();
