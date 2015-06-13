(function() {
  'use strict';

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('account', {
        url: '/account',
          templateUrl: 'client/users/views/account.ng.html',
          controller: 'AccountCtrl as vm',
          resolve: {
            "currentUser": ["$meteor", function($meteor){
              return $meteor.requireUser();
            }]
          }
      })
      .state('login', {
        url: '/login',
          templateUrl: 'client/users/views/login.ng.html',
          controller: 'LoginCtrl as vm',
          resolve: {
            "currentUser": ["$meteor", function($meteor){
              return $meteor.waitForUser();
            }]
          }
      })
      .state('resetpassword', {
        url: '/resetpw',
          templateUrl: 'client/users/views/reset-password.ng.html',
          controller: 'ResetCtrl as vm'
      })
      .state('logout', {
        url: '/logout',
          resolve: {
            "logout": ['$meteor', '$state', function($meteor, $state) {
              return $meteor.logout().then(function(){
                $state.go('login');
              }, function(err){
                console.log('logout error - ', err);
              });
            }]
          }
      });
    });
})();
