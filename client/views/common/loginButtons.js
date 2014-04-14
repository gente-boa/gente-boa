Template.loginButtons.rendered = function () {
  $('#login-buttons-logout').text('Sair');
  $('.text-besides-image').text('Entrar com Facebook');
  $('.text-besides-image').remove('Entrar com Facebook');
  $('.login-close-text').remove('Fechar');
  $('.login-close-text').remove('Fechar');


};

Template._loginButtonsLoggedOutSingleLoginButton.rendered = function () {
  $('#login-buttons-logout').text('Sair');
  $('.login-close-text').remove('Fechar');
  $('.text-besides-image').text('Entrar com Facebook');
  $('.login-display-name').addClass('hidden');
};

Template._loginButtonsLoggedOutDropdown.rendered = function () {
  $('#login-buttons-logout').text('Sair');
  $('.login-close-text').remove('Fechar');
  $('.text-besides-image').text('Entrar com Facebook');
  $('.login-display-name').addClass('hidden');
};



