(function() {
  'use strict';

  angular.module('rightNow').run(function($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });
  });

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    });
})();
