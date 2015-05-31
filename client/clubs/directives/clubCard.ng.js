(function() {
  'use strict';

  angular
    .module('rightNow')
    .directive('clubCard', ClubCard);

  ClubCard.$inject = [];

  function ClubCard() {
    var permittedAttributes = [
      'id',
      'name',
      'crowd',
      'queue',
      'genderRatio',
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
