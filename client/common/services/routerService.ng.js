(function() {
  'use strict';

  angular
    .module('rightNow')
    .factory('RouterService', RouterService);

  RouterService.$inject = ['$state', '$ionicHistory', '$rootScope'];

  function RouterService($state, $ionicHistory, $rootScope) {
    return {
      redirectIfLoggedIn: redirectIfLoggedIn,
      previousState: previousState,
      goBack: goBack
    };

    function redirectIfLoggedIn(state) {
      if($rootScope.currentUser) {
        $state.go(state);
      }
    }

    function previousState() {
      var previousView = $ionicHistory.backView();
      if(previousView) {
        return previousView.stateId;
      } else {
        return 'map';
      }
    }

    function goBack() {
      $state.go(previousState());
    }
  }
})();
