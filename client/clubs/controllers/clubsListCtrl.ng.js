(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubsListCtrl', ClubsListCtrl);

  ClubsListCtrl.$inject = ['ClubsFactory'];

  function ClubsListCtrl(ClubsFactory) {
    var vm = this;
    vm.clubs = ClubsFactory.clubs();
  }
})();
