Meteor.subscribe('events');
Meteor.subscribe('users');


if (_.isEmpty(Meteor.absoluteUrl().match(('http://genteboa.meteor.com/')))) {
  console.log('In localhost facebook');

  if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
    ServiceConfiguration.configurations.insert({
      service: "facebook",
      appId: "630773633655957",
      secret: "46d053f27c8425694a42d8b3dd0c1ffd"
    });
  }
} else {
  if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
    ServiceConfiguration.configurations.insert({
      service: "facebook",
      appId: "457036687763741",
      secret: "2d225d1e472e9908c556cbf6bd8725e1"
    });
  }
}

UI.registerHelper('picFacebook', function(facebookId) {
  var user = Meteor.user();
  if (user&& user.profile && user.profile.id) {
    return 'http://graph.facebook.com/'+facebookId + '/picture/?width=200&height=200';
  } else if (false){
    return 'images/profile-photo.jpg';
  } else{
    return 'images/profile-photo.jpg';
  }
});

UI.registerHelper('isOng', function(){
  var user = Meteor.user();
  if(user && user.roles){
    console.log(user.roles);
    for(var key in user.roles){
      if(user.roles[key] === 'ong'){
        return true;
      }
    }
  }
  return false;
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



