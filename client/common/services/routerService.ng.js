(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('RouterService', RouterService);

  RouterService.$inject = ['$state', '$ionicHistory', '$rootScope'];

  function RouterService($state, $ionicHistory, $rootScope) {
    return {
      redirectIfLoggedIn: redirectIfLoggedIn
    };

    function redirectIfLoggedIn(state) {
      if($rootScope.currentUser) {
        $state.go(state);
      }
    }
  }
})();
