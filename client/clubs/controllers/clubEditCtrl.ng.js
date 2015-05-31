(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubEditCtrl', ClubEditCtrl);

  ClubEditCtrl.$inject = [
    '$stateParams',
    'ClubsFactory',
    'RouterService',
    'attributeLabels'
  ];

  function ClubEditCtrl($stateParams, ClubsFactory, RouterService, attributeLabels) {
    var vm = this;
    vm.save = save;
    vm.goBack = RouterService.goBack;
    vm.club = ClubsFactory.club($stateParams.id);
    vm.attributeLabels = attributeLabels;

    function save() {
      vm.club.reportTime = new Date();
      vm.club.save();
      vm.goBack();
    }
  }
})();
