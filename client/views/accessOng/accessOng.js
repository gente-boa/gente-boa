isNotEmpty = function (val) {
  // if null or empty, return false
  if (!val || val === ''){
    humane.log('Preencha todos os campos.');
    return false;
  }
  return true;
};

Template['accessOng'].helpers({

});

Template['accessOng'].events({
  'click .goCadastro': function(event, template) {
    $('#acesso').addClass('hidden');
    $('#cadastro').removeClass('hidden');
  },
  'click .goAcesso': function(event, template) {
    $('#acesso').removeClass('hidden');
    $('#cadastro').addClass('hidden');
  },
  'submit #formSignIn': function (event, template) {
    event.preventDefault();
    var
      email    = $('#email').val().toLowerCase(),
      password = $('#password').val()
    ;
    if (isNotEmpty(email)&&
        isNotEmpty(password)) {
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          if (err.reason === "User not found") {
            humane.log('Usuário não encontrado!');
          }
          if (err.reason === "Incorrect password") {
            humane.log('Opa! Senha errada');
          }
          return false;
        }
      });
    }
  },

  'submit #formSignUp': function (event, template) {
    event.preventDefault();
    var
      email    = $('#emailSignUp').val(),
      password = $('#passwordSignUp').val()
    ;
    if (isNotEmpty(email)&&
        isNotEmpty(password)) {

      Accounts.createUser({
        email:    email,
        password: password,
      }, function (err) {
        if (err) {
          console.log(err);
          if (err.reason === "Email already exists.") {
            humane.log('Ops esse email já existe!');
          }
        }
      });
    }
  },

});

