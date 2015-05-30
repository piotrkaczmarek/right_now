(function() {
  'use strict';

  angular
    .module('rightNow')
    .directive('clubCard', ClubCard);

  ClubCard.$inject = [];

  function ClubCard() {
    var permittedAttributes = [
      'name',
      'crowd',
      'queue',
      'maleToFemaleRatio',
      'musicType',
      'musicPlaying'
    ];
    var scope = {};
    permittedAttributes.forEach(function(attribute) {
      scope[attribute] = '@';
    });

    var directive = {
      templateUrl: 'client/clubs/views/club-card.ng.html',
      restrict: 'E',
      scope: scope
    };
    return directive;
  }
})();
