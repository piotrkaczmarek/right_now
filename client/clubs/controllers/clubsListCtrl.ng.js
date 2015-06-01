(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubsListCtrl', ClubsListCtrl);

  ClubsListCtrl.$inject = ['ClubsFactory', 'attributeLabels'];

  function ClubsListCtrl(ClubsFactory, attributeLabels) {
    var vm = this;
    vm.clubs = ClubsFactory.clubs();
    vm.attributeLabels = attributeLabels;
  }
})();
