(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('ClubsFactory', ClubsFactory);

  ClubsFactory.$inject = ['$meteor'];

  function ClubsFactory($meteor) {
    return {
      clubs: clubs,
      club: club
    };
    function club(id) {
      return $meteor.object(Clubs, id, false).subscribe('clubs');
    };
    function clubs() {
      return $meteor.collection(Clubs, false).subscribe('clubs');
    };
  }
})();
