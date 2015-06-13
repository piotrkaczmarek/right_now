(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller("ResetCtrl", ResetCtrl);

  ResetCtrl.$inject = ['$meteor', '$state'];

  function ResetCtrl($meteor, $state){
    var vm = this;

    vm.credentials = {
      email: ''
    };
    vm.error = '';
    vm.reset = reset;

    function reset(){
      $meteor.forgotPassword(vm.credentials).then(
        function(){
          $state.go('login');
        },
        function(err){
          vm.error = 'Error sending forgot password email - ' + err;
        }
      );
    }
  }
})();

