(function() {
  'use strict';

  angular
    .module('rightNow')
    .constant('attributeLabels', {
      crowd: {
        5: 'empty',
        15: 'almost empty',
        45: 'moderate',
        60: 'decent',
        80: 'crowded',
        Infinity: 'overcrowded'
      },
      queue: {
        5: 'no queue',
        10: '~ 5 mins',
        20: '~ 10 mins',
        25: '~ 15 mins',
        30: '~ 20 mins',
        40: '~ 25 mins',
        50: '~ 30 mins',
        80: '~ 45 mins',
        90: '~ 1 hour',
        Infinity: 'over 1 hour'
      },
      genderRatio: {
        20: 'significantly more males',
        40: 'slightly more males',
        60: 'even',
        80: 'slightly more females',
        Infinity: 'significantly more females'
      }
    });
})();
