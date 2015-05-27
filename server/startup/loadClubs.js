Meteor.startup(function () {
  if (Clubs.find().count() === 0) {
    var clubs = [
      {
        name: 'Hybrydy',
        location: { lat: 52.232763, lng: 21.011637 },
        crowd: 'moderate',
        maleToFemaleRatio: 'even',
        musicPlaying: 'Keisha Hideaway',
        musicType: 'Pop',
        queue: '0 mins',
        reportTime: new Date(2015,4,25,22,30,0,0)
       },
      {
        name: 'Enklawa Art Music Club',
        location: { lat: 52.237886, lng: 21.013080 },
        crowd: 'overcrowded',
        maleToFemaleRatio: 'even',
        musicPlaying: 'Deorro Five Hours',
        musicType: 'House',
        queue: '30 mins',
        reportTime: new Date(2015,4,25,22,45,0,0)
       },
    ];
    for (var i = 0; i < clubs.length; i++)
      Clubs.insert(clubs[i]);
  }
});
