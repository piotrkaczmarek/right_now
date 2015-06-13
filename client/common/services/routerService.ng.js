(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('RouterService', RouterService);

  RouterService.$inject = ['$state', '$rootScope'];

  function RouterService($state, $rootScope) {
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
