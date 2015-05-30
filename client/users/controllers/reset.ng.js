angular.module('rightNow').controller("ResetCtrl", ['$meteor', '$state',
  function($meteor, $state){
    var vm = this;

    vm.credentials = {
      email: ''
    };

    vm.error = '';

    vm.register = function (){
      $meteor.forgotPassword(vm.credentials.email).then(
        function(){
          $state.go('tabs.account');
        },
        function(err){
          vm.error = 'Error sending forgot password email - ' + err;
        }
      );
    };
  }
]);
