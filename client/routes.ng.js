(function() {
  'use strict';

  angular.module('rightNow').run(function($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('tabs.login');
      }
    });
  });

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('tabs', {
        abstract: true,
        templateUrl: 'client/common/views/tabs.ng.html'
      });

    // $urlRouterProvider.otherwise('/list');
    });
})();
