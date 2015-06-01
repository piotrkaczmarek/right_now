(function() {
  'use strict';

  angular
    .module('rightNow')
    .directive('clubCard', ClubCard);

  ClubCard.$inject = [];

  function ClubCard() {
    var directive = {
      templateUrl: 'client/clubs/views/club-card.ng.html',
      restrict: 'E'
    };
    return directive;
  }
})();
