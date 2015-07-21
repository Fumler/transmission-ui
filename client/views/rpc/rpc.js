'use strict';

angular.module('transmissionUi')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rpc', {
        templateUrl: 'views/rpc/rpc.html',
        controller: 'RpcCtrl',
        controllerAs: 'vm'
      });
  });
