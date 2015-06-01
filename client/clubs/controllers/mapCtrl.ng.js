(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['ClubsFactory', '$scope', 'attributeLabels'];

  function MapCtrl(ClubsFactory, $scope, attributeLabels) {
    var vm = this;
    vm.attributeLabels = attributeLabels;
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
    vm.markers = vm.clubs.map(function(club) {
      return {
        lat: club.location.lat,
        lng: club.location.lng,
        compileMessage: true,
        getMessageScope: function() {
          var markerScope = $scope.$new();
          markerScope.club = club;
          return markerScope;
        },
        message: '<club-card></club-card>'
        // label: {
        //   message: $filter('toClubCard')(club),
        //   // https://github.com/Leaflet/Leaflet.label#options
        //   options: {
        //     noHide: true,
        //     direction: 'auto'
        //   }
        // }
      };
    });
  }
})();
