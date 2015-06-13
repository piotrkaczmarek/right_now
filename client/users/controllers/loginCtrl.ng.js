(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller("LoginCtrl", LoginCtrl);

  LoginCtrl.$inject = ['$meteor', '$state', '$rootScope', 'RouterService'];

  function LoginCtrl($meteor, $state, $rootScope, RouterService){
    var vm = this;
    RouterService.redirectIfLoggedIn('account');

    vm.credentials = {
      email: '',
      password: ''
    };
    vm.error = '';
    vm.login = login;
    vm.register = register;

    function login() {
      $meteor.loginWithPassword(vm.credentials.email.toLowerCase(), vm.credentials.password).then(
        function(){
          $state.go('map');
        },
        function(err){
          vm.error = 'Login error - ' + err;
        }
      );
    }

    function register(){
      $meteor.createUser({ email: vm.credentials.email.toLowerCase(), password: vm.credentials.password }).then(
        function(){
          $state.go('map');
        },
        function(err){
          vm.error = 'Registration error - ' + err;
        }
      );
    }
  }
})();
