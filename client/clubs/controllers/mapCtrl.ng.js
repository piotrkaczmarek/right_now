(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['ClubsFactory', '$scope', '$mdBottomSheet', 'leafletData', '$window'];

  function MapCtrl(ClubsFactory, $scope, $mdBottomSheet, leafletData, $window) {
    var vm = this;
    vm.clubs = ClubsFactory.clubs();
    vm.map = {
      center: {
        lat: 52.233,
        lng: 21.014,
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
      markers: vm.clubs.map(function(club) {
        return {
          lat: club.location.lat,
          lng: club.location.lng,
          compileMessage: true,
          getMessageScope: function() {
            var markerScope = $scope.$new();
            markerScope.club = club;
            return markerScope;
          }
          // },
          // message: '<club-card></club-card>'
        };
      })
    };

    leafletData.getMap().then(function(map) {
      map._container.style.height = ($window.innerHeight - 63) + 'px';
      map.invalidateSize();
    });

    $scope.$on('leafletDirectiveMarker.click', function(click_event, marker) {
      $scope.vm.map.center.lat = marker.model.lat;
      $scope.vm.map.center.lng = marker.model.lng;
      $mdBottomSheet.show({
        templateUrl: 'client/clubs/views/club-bottom-sheet.ng.html',
        scope: marker.model.getMessageScope()
      })
    })
  }
})();
