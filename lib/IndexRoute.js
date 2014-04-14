var IndexController = FastRender.RouteController.extend({
  template: 'index'

});

Router.map(function () {
  this.route('index', {
    path :  '/',
    controller :  IndexController
  });
});

