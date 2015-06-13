(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('MapFactory', MapFactory);

  MapFactory.$inject = ['ClubsFactory', '$stateParams', '$rootScope'];

  function MapFactory(ClubsFactory, $stateParams, $rootScope) {
    return {
      map: map
    };

    function map(club) {
      var center = centerFromQueryOrDefault();
      var clubs = ClubsFactory.clubs()
      return {
        center: {
          lat: center.lat,
          lng: center.lng,
          zoom: 20
        },
        layers: {
          baselayers: {
            osm: {
                name: 'MapQuest',
                url: 'http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
                type: 'xyz'
            }
          }
        },
        markers: markers(clubs)
      };
    }

    function markers(clubs) {
      return clubs.map(function(club) {
        return {
          lat: club.location.lat,
          lng: club.location.lng,
          compileMessage: true,
          getMessageScope: function() {
            var markerScope = $rootScope.$new();
            markerScope.club = club;
            return markerScope;
          }
          // },
          // message: '<club-card></club-card>'
        };
      })
    }

    function centerFromQueryOrDefault() {
      var defaultCenter = {
        lat: 52.233,
        lng: 21.014,
      };
      if(!($stateParams.lat && $stateParams.lng)) {
        return defaultCenter;
      } else {
        return {
          lat: Number($stateParams.lat),
          lng: Number($stateParams.lng)
        }
      }
    };
  }
})();
