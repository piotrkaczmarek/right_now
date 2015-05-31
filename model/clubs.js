Clubs = new Mongo.Collection('clubs');

Clubs.allow(
  {
    update: function(userId, club) {
      return !_.isEmpty(userId);
    }
  }
);
