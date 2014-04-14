var RecompensasController = FastRender.RouteController.extend({
  template: 'recompensas'
});

Router.map(function () {
  this.route('recompensas', {
    path :  '/app/recompensas',
    controller :  RecompensasController
  });
});

