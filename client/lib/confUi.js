if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "457036687763741",
    secret: "2d225d1e472e9908c556cbf6bd8725e1"
  });
}


Meteor.subscribe('events');
Meteor.subscribe('users');

//Divide x / y

UI.registerHelper('picFacebook', function(facebookId) {
  var user = Meteor.user();
  if (user&& user.profile && user.profile.id) {
    return 'http://graph.facebook.com/'+facebookId + '/picture/?width=200&height=200';
  } else {
    return 'images/profile-photo.jpg';
  }
});




UI.registerHelper('clean', function(val) {
  return val.replace(/ /g, "");

});

UI.registerHelper('sub', function(val) {
  return val.substring(0,200);

});

UI.registerHelper('fromNow', function(val) {

  return moment(val).lang('pt-br').fromNow();

});

UI.registerHelper('parsedDate', function(val) {
  return moment(val).lang('pt-br').format('DD/MM/YY');

});



