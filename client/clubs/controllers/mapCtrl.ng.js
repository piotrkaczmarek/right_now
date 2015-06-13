(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['MapFactory', '$scope', '$location', '$mdBottomSheet', 'leafletData', '$window'];

  function MapCtrl(MapFactory, $scope, $location, $mdBottomSheet, leafletData, $window) {
    var vm = this;
    vm.map = MapFactory.map();
    adjustMapHeight();

    function adjustMapHeight() {
      leafletData.getMap().then(function(map) {
        map._container.style.height = ($window.innerHeight - 70) + 'px';
        map.invalidateSize();
      });
    }

    function centerOnPoint(lat, lng) {
      $location.search('lat', lat);
      $location.search('lng', lng);
      $scope.vm.map.center.lat = lat;
      $scope.vm.map.center.lng = lng;
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
