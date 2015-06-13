(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubEditCtrl', ClubEditCtrl);

  ClubEditCtrl.$inject = [
    '$stateParams',
    '$state',
    'ClubsFactory',
    'attributeLabels',
    'musicTypes'
  ];

  function ClubEditCtrl($stateParams, $state, ClubsFactory, attributeLabels, musicTypes) {
    var vm = this;
    vm.submit = submit;
    vm.club = ClubsFactory.club($stateParams.id);
    vm.attributeLabels = attributeLabels;
    vm.chips = {
      selectedItem: null,
      searchText: null,
      querySearch: querySearch,
      selectedMusicTypes: []
    };

    function querySearch(query) {
      return query ? musicTypes.filter(musicTypeFilter(query)) : [];
    }

    function musicTypeFilter(query) {
      return function(musicType) {
        return (musicType.indexOf(query.toLowerCase()) == 0)
      }
    }

    function submit() {
      vm.club.reportTime = new Date();
      vm.club.save();
      $state.go('map', { lat: vm.club.location.lat, lng: vm.club.location.lng });
    }
  }
})();
