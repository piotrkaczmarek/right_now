(function() {
  'use strict';

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider){
    $locationProvider.html5Mode(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
    $stateProvider
      .state('club-edit', {
        url: '/clubs/:id',
        templateUrl: 'client/clubs/views/club-edit.ng.html',
        controller: 'ClubEditCtrl as vm',
        resolve: {
          'currentUser': ['$meteor', function($meteor){
            return $meteor.requireUser();
          }]
        }
      })
      .state('map', {
        url: '/?lat&lng',
        reloadOnSearch : false,
        templateUrl: 'client/clubs/views/map.ng.html',
        controller: 'MapCtrl as vm',
        resolve: {
          'subscribe': ['$meteor', function($meteor) {
            return $meteor.subscribe('clubs');
          }]
        }
      });
    });
})();
