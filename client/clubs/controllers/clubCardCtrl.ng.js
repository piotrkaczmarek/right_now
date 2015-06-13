(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubCardCtrl', ClubCardCtrl);

  ClubCardCtrl.$inject = ['$scope', '$state', '$mdBottomSheet', 'attributeLabels'];

  function ClubCardCtrl($scope, $state, $mdBottomSheet, attributeLabels) {
    var vm = this;
    vm.attributeLabels = attributeLabels;
    vm.goEdit = goEdit;

    function goEdit(club_id) {
      $mdBottomSheet.hide();
      $state.go("club-edit", {id: club_id});
    }
  }
})();
