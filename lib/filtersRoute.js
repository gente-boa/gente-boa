//Router configuration
Meteor.startup(function () {

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'header': { to: 'header' }
  },
  loadingTemplate:'loading',
  notFoundTemplate:'notFound'
});

});

//Filters

var filters = {

  resetScroll: function (path) {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  },

  ifNotLogged: function(path) {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.redirect('index');
      return;
    }
  },

  ifLogged: function(path) {
    if ((Meteor.loggingIn() || Meteor.user())) {
      this.redirect('main');
      return;
    }
  },

  ifLogging: function(path) {
    if (Meteor.user()) {
      this.redirect('main');
      return;
    }
  },

  //Only admin can access admin template

  ifAdmin: function(path) {
    var user = Meteor.user();
      if (user && !Roles.userIsInRole(user, 'admin')) {
        this.redirect('admin');
        return;
      }
  },

  insertTitle: function(path) {
    document.title = "Quem faz a diferença merece recompensa | Gente Boa";
  }

};

if(Meteor.isClient){

  //For example clean fields

  Router.onRun( function () {


    });

// onBeforeAction Hooks
//Active loading from iron router
Router.onBeforeAction('loading');

//Only admin can access admin template

  Router.onBeforeAction(filters.insertTitle, {only: [
    'accessOng',
    'admin',
    'index',
    'listOngs',
    'main',
    'ong',
    'recompensas',
  ]});

// //Only admin can access admin template

//   Router.onBeforeAction(filters.ifNot, {except: [
//     'accessOng',
//     'admin',
//     'index',
//     'listOngs',
//     'main',
//     'ong',
//     'recompensas',

//   ]});

  //Only admin can access admin template

  Router.onBeforeAction(filters.ifAdmin, {only: [
    'admin',
  ]});

  //Reset scroll in these pages

  Router.onBeforeAction(filters.resetScroll, {only: [
    'index',

  ]});

  //If user is not logged can't access these templates

  Router.onBeforeAction(filters.ifNotLogged, {only: [
    'admin',
    'listOngs',
    'main',
    'ong',
    'recompensas',

  ]});

  //If user is logged access these templates

  Router.onBeforeAction(filters.ifLogged, {only: [
    'index',
    'accessOng',

    ]});

  }