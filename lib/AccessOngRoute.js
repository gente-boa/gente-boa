var AccessOngController = FastRender.RouteController.extend({
  template: 'accessOng'
});

Router.map(function () {
  this.route('accessOng', {
    path :  '/accessong',
    controller :  AccessOngController
  });
});

