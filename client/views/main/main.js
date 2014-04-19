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
    Session.set('numberCredits', 1);
  },

});

Template.addEvent.events({
  'click #createEvent': function(event, template) {
    $('#addEvent').removeClass('hidden');
    $('#createEvent').addClass('hidden');
  },

  'click #cancelEvent': function(event, template) {
    $('#createEvent').removeClass('hidden');
    $('#addEvent').addClass('hidden');
  },

  'click #submitEvent': function(event, template) {
    var
      title       = $('#title').val(),
      description = $('#description').val(),
      date    = $('#date').val(),
      time    = $('#time').val()
    ;

    if (_.isEmpty(title)&&
        _.isEmpty(description)&&
        _.isEmpty(date)&&
        _.isEmpty(time)) {
    humane.log('Complete todo os campos...');
    } else {
      Events.insert({
        idUser: Meteor.userId(),
        createDate: moment(),
        date: date,
        time: time,
        title: title,
        local: 'XXXX',
        description: description,
        ong: Meteor.user().profile.name,
        type: 'um evento',
        linkong: 'leite.jpg',
        subscribed: []
      });
      humane.log('Evento adicionado com sucesso!');
      $('#addEvent').addClass('hidden');
      $('#createEvent').removeClass('hidden');
    }
  },
});



