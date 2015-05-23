Meteor.startup(function () {
  if (Clubs.find().count() === 0) {
    var clubs = [
      {name: 'Hybrydy'},
      {name: 'Enklawa'}
    ];
    for (var i = 0; i < clubs.length; i++)
      Clubs.insert({ name: clubs[i].name });
  }
});
