
Meteor.publish('events', function () {
  return Events.find();
});

//Publish null to show certain fields to the customer

Meteor.publish('users', function() {
  return Meteor.users.find({},{fields: {profile: 1, username: 1, emails: 1, roles:1}});
});