(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['ClubsFactory', '$scope', '$location','$stateParams', '$mdBottomSheet', 'leafletData', '$window'];

  function MapCtrl(ClubsFactory, $scope, $location, $stateParams, $mdBottomSheet, leafletData, $window) {
    var vm = this;
    var center = centerFromQueryOrDefault();
    vm.clubs = ClubsFactory.clubs();
    vm.map = map();
    adjustMapHeight();

    function map() {
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


    function centerOnPoint(lat, lng) {
      $location.search('lat', lat);
      $location.search('lng', lng);
      $scope.vm.map.center.lat = lat;
      $scope.vm.map.center.lng = lng;
    }

    function adjustMapHeight() {
      leafletData.getMap().then(function(map) {
        map._container.style.height = ($window.innerHeight - 63) + 'px';
        map.invalidateSize();
      });
    }

    $scope.$on('leafletDirectiveMarker.click', function(click_event, marker) {
      centerOnPoint(marker.model.lat, marker.model.lng);
      $mdBottomSheet.show({
        templateUrl: 'client/clubs/views/club-bottom-sheet.ng.html',
        scope: marker.model.getMessageScope()
      })
    })
  }
})();
