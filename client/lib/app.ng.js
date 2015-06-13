(function() {
  'use strict';

  angular.module('rightNow',[
    'angular-meteor',
    'ui.router',
    'leaflet-directive',
    'ngMaterial'
  ]);

  function onReady() {
    angular.bootstrap(document, ['rightNow']);
  }

  if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
  else
    angular.element(document).ready(onReady);
})();

