(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('MapFactory', MapFactory);

  MapFactory.$inject = ['ClubsFactory', '$stateParams', 'leafletBoundsHelpers', '$rootScope'];

  function MapFactory(ClubsFactory, $stateParams, leafletBoundsHelpers, $rootScope) {
    return {
      map: map
    };

    function map(club) {
      var center = centerFromQueryOrDefault();
      var clubs = ClubsFactory.clubs()
      return {
        defaults: {
          minZoom: 13
        },
        center: {
          lat: center.lat,
          lng: center.lng,
          zoom: 16
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
        maxbounds: bounds(),
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

    function bounds() {
      return leafletBoundsHelpers.createBoundsFromArray([
        [52.31645452105213, 21.233139038085938], // Warsaw NE
        [52.14823737817847, 20.793685913085934]  // Warsaw SW
      ])
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
