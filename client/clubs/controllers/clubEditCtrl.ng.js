(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubEditCtrl', ClubEditCtrl);

  ClubEditCtrl.$inject = ['$stateParams', 'ClubsFactory', 'RouterService', 'crowdLabels'];

  function ClubEditCtrl($stateParams, ClubsFactory, RouterService, crowdLabels) {
    var vm = this;
    vm.save = save;
    vm.goBack = RouterService.goBack;
    vm.club = ClubsFactory.club($stateParams.id);
    vm.crowdLabels = crowdLabels;

    function save() {
      vm.club.reportTime = new Date();
      vm.club.save();
      vm.goBack();
    }
  }
})();
