(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['ClubsFactory', '$window'];

  function MapCtrl(ClubsFactory) {
    var vm = this;
    vm.warsaw = {
      lat: 52.233,
      lng: 21.014,
      zoom: 14
    };
    vm.layers = {
      baselayers: {
        osm: {
            name: 'OpenStreetMap',
            url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            type: 'xyz'
        }
      }
    };
    vm.clubs = ClubsFactory.clubs();
  }
})();
