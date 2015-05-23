(function() {
  'use strict';

  angular.module('rightNow',[
    'angular-meteor',
    'ui.router'
  ]);

  function onReady() {
    angular.bootstrap(document, ['rightNow']);
  }

  if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
  else
    angular.element(document).ready(onReady);
})();

