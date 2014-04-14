Template.main.rendered = function () {
  Session.set('numberCredits', 0);
};

Template['main'].helpers({
  user:function () {
    return Meteor.users.find({_id:Meteor.userId()});
  },
  events:function () {
    return Events.find();
  },
  number: function() {
    return Session.get('numberCredits');
  }

});

Template['vaiGente'].events({
  'click #vaiGente': function (event, template) {
    Session.set('numberCredits', 1);
  },
  'click .cbp_tmtimeline': function (event, template) {
    console.log(this);
    console.log(event);
    Session.set('numberCredits', 1);
  },

});



