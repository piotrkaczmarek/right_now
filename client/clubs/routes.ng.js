(function() {
  'use strict';

  angular.module('rightNow').run(function($rootScope, $location) {
    $rootScope.$on('$stateChangeError', function(event, next, previous, error) {
      // We can catch the error thrown when the $requireUser promise is rejected
      // and redirect the user back to the main page
      if (error === 'AUTH_REQUIRED') {
        $location.path('/clubs');
      }
    });
  });

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('tabs', {
          abstract: true,
          templateUrl: 'client/clubs/views/tabs.ng.html'
        })
        .state('tabs.list', {
          url: '/list',
          views: {
            'tab-list': {
              templateUrl: 'client/clubs/views/clubs-list.ng.html',
              controller: 'ClubsListCtrl as vm'
            }
          }
        })
        .state('tabs.map', {
          url: '/map',
          views: {
            'tab-map': {
              templateUrl: 'client/clubs/views/map.ng.html',
              controller: 'MapCtrl as vm',
              resolve: {
                'subscribe': ['$meteor', function($meteor) {
                  return $meteor.subscribe('clubs');
                }]
              }
            }
          }
        })
        .state('tabs.account', {
          url: '/account',
            templateUrl: 'client/clubs/views/account.ng.html',
            controller: 'AccountCtrl as vm'
        })
        .state('tabs.login', {
          url: '/login',
            templateUrl: 'client/users/views/login.ng.html',
            controller: 'LoginCtrl as lc'
        })
        .state('tabs.register',{
          url: '/register',
            templateUrl: 'client/users/views/register.ng.html',
            controller: 'RegisterCtrl as rc'
        })
        .state('tabs.resetpassword', {
          url: '/resetpw',
            templateUrl: 'client/users/views/reset-password.ng.html',
            controller: 'ResetCtrl as rpc'
        })
        .state('tabs.logout', {
          url: '/logout',
            resolve: {
              "logout": ['$meteor', '$state', function($meteor, $state) {
                return $meteor.logout().then(function(){
                  $state.go('tabs.login');
                }, function(err){
                  console.log('logout error - ', err);
                });
              }]
            }
        });

      $urlRouterProvider.otherwise('/list');
    });
})();
