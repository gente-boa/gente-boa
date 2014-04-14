var MainController = FastRender.RouteController.extend({
  template: 'main',
  onBeforeAction: function () {
    moment.lang('pt-br');
  },
});

Router.map(function () {
  this.route('main', {
    path :  '/app',
    controller :  MainController
  });
});

