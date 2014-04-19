Template['modalOngForm'].helpers({
});

Template['modalOngForm'].events({
  'click #saveProfile': function(event, template) {
    var
      name = $('#name').val(),
      description = $('#description').val()
    ;

    Meteor.users.update(Meteor.userId(), { $set: {
      'profile.name':name,
      'profile.description':description
    }});
    $('#ongFormModal').modal('hide');
    humane.log('Perfil atualizado com sucesso!');
  }
});

