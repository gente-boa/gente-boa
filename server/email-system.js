//Email system

Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://sejagenteboa%40gmail.com:genteboa1234@smtp.gmail.com:465/';
});
