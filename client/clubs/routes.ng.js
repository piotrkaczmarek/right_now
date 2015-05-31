(function() {
  'use strict';

  angular.module('rightNow').config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
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
      .state('club-edit', {
        url: '/clubs/:id',
        templateUrl: 'client/clubs/views/club-edit.ng.html',
        controller: 'ClubEditCtrl as vm',
        resolve: {
          'currentUser': ['$meteor', function($meteor){
            return $meteor.requireUser();
          }]
        }
      });
    });
})();
