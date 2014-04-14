Meteor.startup(function () {

  // code to run on server at startup

  Meteor.methods({
    sendEmail: function(email) {
      console.log(email);
      Email.send({
        to: email,
        from: 'gentes@sejagenteboa.com.br',
        subject: 'Eai gente boa! Aproveite sua recompensa!',
        html: Handlebars.templates['email']()
      });
      return true;
    },
  });
});