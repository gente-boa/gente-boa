Template['recompensas'].events({
  'click .magazine': function(event, template) {
    console.log('teste');
    Meteor.call('sendEmail', Meteor.user().profile.email, function (error, result) {
      if (error) {
        humane.log('ERRO');
      }
      if (result) {
        humane.log('Voucher enviado! Obrigado.');
        Session.set('numberCredits', 0);
      }
    });

  }
});


Template.recompensas.rendered = function () {
  Session.set('numberCredits', 1);
};

Template['recompensas'].helpers({
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


