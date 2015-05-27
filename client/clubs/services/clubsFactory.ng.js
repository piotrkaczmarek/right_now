(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('ClubsFactory', ClubsFactory);

  ClubsFactory.$inject = ['$meteor'];

  function ClubsFactory($meteor) {
    return {
      clubs: clubs
    };
    function clubs() {
      return $meteor.collection(Clubs, false).subscribe('clubs');
    }
  }
})();
