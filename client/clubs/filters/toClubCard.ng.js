(function() {
  'use strict';

  angular
    .module('rightNow')
    .filter('toClubCard', toClubCard);

  toClubCard.$inject = ['$filter'];

  function toClubCard($filter) {
    var filter = function(club) {
      var permittedAttributes = [
        'name',
        'crowd',
        'queue',
        'genderRatio',
        'musicType',
        'musicPlaying'
      ];
      var dateFilter = $filter('date');
      var htmlAtributes = permittedAttributes.map(function(attribute) {
        return attribute.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '="' + club[attribute]+'"';
      }).join(' ');
      return '<club-card id="' + club._id +
        '" report-time="' + dateFilter(club.reportTime, 'HH:mm') +
        '" ' + htmlAtributes + '></club-card>';
    };
    return filter;
  }
})();
