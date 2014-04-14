Template['index'].rendered = function () {
  $('.login-form').hide();
  $('.or').hide();
};


Template['index'].helpers({
  eventsLanding: function() {
    return Events.find({},{limit:3});
  }
});

Template['index'].events({
  'click .loginFace': function (event, template) {
    Meteor.loginWithFacebook();
  },
});

