(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['ClubsFactory', '$filter'];

  function MapCtrl(ClubsFactory, $filter) {
    var vm = this;
    vm.warsaw = {
      lat: 52.233,
      lng: 21.014,
      zoom: 14
    };
    vm.layers = {
      baselayers: {
        osm: {
            name: 'MapQuest',
            url: 'http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
            type: 'xyz'
        }
      }
    };
    vm.clubs = ClubsFactory.clubs();
    vm.markers = vm.clubs.map(function(club, index) {
      var marker = {};
      return marker['m' + index] = {
        lat: club.location.lat,
        lng: club.location.lng,
        label: {
          message: $filter('toClubCard')(club),
          // https://github.com/Leaflet/Leaflet.label#options
          options: {
            noHide: true,
            direction: 'auto'
          }
        }
      };
    });
  }
})();
