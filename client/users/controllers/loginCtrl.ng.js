(function() {
  'use strict';

  angular
    .module('rightNow')
    .controller("LoginCtrl", LoginCtrl);

  LoginCtrl.$inject = ['$meteor', '$state', '$rootScope'];

  function LoginCtrl($meteor, $state, $rootScope){
    var vm = this;
    redirectIfLoggedIn();

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
          $state.go('tabs.account');
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

    function redirectIfLoggedIn() {
      if($rootScope.currentUser) {
        $state.go('tabs.account');
      }
    }
  }
})();
