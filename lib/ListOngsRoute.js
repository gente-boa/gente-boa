var ListOngsController = FastRender.RouteController.extend({
  template: 'listOngs'
});

Router.map(function () {
  this.route('listOngs', {
    path :  '/app/listongs',
    controller :  ListOngsController
  });
});

