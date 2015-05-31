(function() {
  'use strict';

  angular
    .module('rightNow')
    .filter('toClubCard', toClubCard);

  toClubCard.$inject = [];

  function toClubCard() {
    var filter = function(club) {
      var permittedAttributes = [
        'name',
        'crowd',
        'queue',
        'genderRatio',
        'musicType',
        'musicPlaying'
      ];
      var htmlAtributes = permittedAttributes.map(function(attribute) {
        return attribute.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '="' + club[attribute]+'"';
      }).join(' ');
      return '<club-card id=' + club._id + ' ' + htmlAtributes + '></club-card>';
    };
    return filter;
  }
})();
