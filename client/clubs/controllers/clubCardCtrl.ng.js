(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller('ClubCardCtrl', ClubCardCtrl);

  ClubCardCtrl.$inject = ['$scope', 'attributeLabels'];

  function ClubCardCtrl($scope, attributeLabels) {
    var vm = this;
    vm.attributeLabels = attributeLabels;
  }
})();
