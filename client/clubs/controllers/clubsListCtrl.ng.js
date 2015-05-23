(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubsListCtrl', ClubsListCtrl);

  ClubsListCtrl.$inject = ['$meteor'];

  function ClubsListCtrl($meteor) {
    var vm = this;
    vm.clubs = $meteor.collection(Clubs).subscribe('clubs');
  }
})();
