var OngController = FastRender.RouteController.extend({
  template: 'ong'
});

Router.map(function () {
  this.route('ong', {
    path :  '/app/ong',
    controller :  OngController
  });
});

