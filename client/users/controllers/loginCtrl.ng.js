(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller("LoginCtrl", LoginCtrl);

  LoginCtrl.$inject = ['$meteor', '$state', '$rootScope', 'RouterService'];

  function LoginCtrl($meteor, $state, $rootScope, RouterService){
    var vm = this;
    RouterService.redirectIfLoggedIn('tabs.account');

    vm.credentials = {
      email: '',
      password: ''
    };
    vm.error = '';
    vm.login = login;
    vm.register = register;

    function login() {
      $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
        function(){
          $state.go('tabs.map');
        },
        function(err){
          vm.error = 'Login error - ' + err;
        }
      );
    };

    function register(){
      $meteor.createUser(vm.credentials).then(
        function(){
          $state.go('tabs.account');
        },
        function(err){
          vm.error = 'Registration error - ' + err;
        }
      );
    };

  }
})();
